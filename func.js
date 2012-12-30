/*jshint node:true, newcap:false */
/**
 * @fileOverview
 * Func Declaration File
 *
 * @author Shannon Moeller
 * @version 1.0
 */

'use strict';

/**
 * Modules.
 */
var copier = require('copier');

/**
 * A generic constructor.
 *
 * @constructor
 */
var Func = function() {};

/**
 * Inheritance through extension.
 *
 * @param {Object} prot A prototype object.
 * @param {Object} stat A static object.
 * @return {Function}
 */
Func.extend = function(prot, stat) {
    // Whether to call this.init().
    var init = false;

    // The essence of Object.create.
    var parent = new this();

    // A function which always returns an instance.
    var fn = function F() {
        var self = this;

        // Call with `new` if no one else has.
        if (!(self instanceof F)) {
            // Don't execute the init logic.
            init = false;

            // Just extend the prototype chain.
            self = new fn();
        }

        if (init) {
            // Time to execute the init.
            self.init.apply(self, arguments);
        } else {
            // Init next time around.
            init = true;
        }

        // Return instance.
        return self;
    };

    // Prototype (instance) properties.
    fn.prototype = copier(parent, prot, {
        constructor: fn
    });

    // Static properties.
    copier(fn, stat, {
        extend: this.extend
    });

    // Our shiney new constructor.
    return fn;
};

/**
 * Expose Func.
 */
module.exports = Func.extend({
    /**
     * A do-nothing default initializer.
     *
     * @return {Object}
     */
    init: function() {
        return this;
    }
});
