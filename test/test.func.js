/*jshint node:true, newcap:false */
/*global assert, describe, it */
/**
 * @fileOverview
 * Constructor Tests File
 *
 * @author Shannon Moeller
 * @version 1.0
 */

'use strict';

var Func = require('func');

describe('Func()', function() {
    it('should return an instance of Func', function() {
        assert(Func() instanceof Func);
    });

    it('should be extendable', function() {
        var sub = Func.extend({ a: 1 }, { b: 2 });
        var ins = sub();

        // Check chain
        assert.ok(ins instanceof Func);
        assert.ok(ins instanceof sub);

        // Check prototype
        assert.strictEqual(sub.a, undefined);
        assert.strictEqual(sub.prototype.a, 1);
        assert.strictEqual(ins.a, 1);

        // Check static
        assert.strictEqual(sub.b, 2);
        assert.strictEqual(ins.b, undefined);
    });
});
