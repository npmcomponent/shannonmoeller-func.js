/*jshint node:true, newcap:false */
/*global assert, describe, it */
/**
 * @fileOverview
 * Func Tests File
 *
 * @author Shannon Moeller
 * @version 1.0
 */

'use strict';

var Func = require('func');

describe('Func()', function() {
    it('should always return an instance of Func', function() {
        // Call normally
        assert(Func() instanceof Func);

        // Call with new
        assert(new Func() instanceof Func);

        // Call and bind context
        assert(Func.call(this) instanceof Func);
        assert(Func.apply(null) instanceof Func);
    });

    it('should be easily extendable', function() {
        var prot = { a: 1 };
        var stat = { b: 2 };

        // Extend Func
        var Sub = Func.extend(prot, stat);

        // Create instance
        var obj = Sub();

        // Check chain
        assert.ok(obj instanceof Func);
        assert.ok(obj instanceof Sub);

        // Check prototype
        assert.strictEqual(Sub.a, undefined);
        assert.strictEqual(Sub.prototype.a, 1);
        assert.strictEqual(obj.a, 1);

        // Check static
        assert.strictEqual(Sub.b, 2);
        assert.strictEqual(obj.b, undefined);

        // Check fertility
        assert.ok(Sub.hasOwnProperty('extend'));
        assert.strictEqual(typeof Sub.extend, 'function');
    });
});
