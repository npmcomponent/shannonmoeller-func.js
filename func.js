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
    var init = false;

    var parent = new this();

    var fn = function F() {
        var self = this;

        if (!(self instanceof F)) {
            init = false;

            self = new fn();
        }

        if (init) {
            self.init.apply(self, arguments);
        } else {
            init = true;
        }

        return self;
    };

    fn.prototype = copier(parent, prot, {
        constructor: fn
    });

    copier(fn, stat, {
        extend: this.extend
    });

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
