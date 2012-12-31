# func.js - Zero class and proud of it.

  A better JavaScript constructor pattern. Abstracts away the bad parts of `new`, but maintains a distinction between instance and static members, unlike the illustrious `Object.create`.

``` js
var Func = require('func');

// Extend Func
var Sub = Func.extend(
    { a: 1 }, // instance members
    { b: 2 }  // static members
);

// Create instance
var obj = Sub();

// Check chain
assert.ok(obj instanceof Func);
assert.ok(obj instanceof Sub);

// Check instance
assert.strictEqual(Sub.a, undefined);
assert.strictEqual(obj.a, 1);

// Check static
assert.strictEqual(Sub.b, 2);
assert.strictEqual(obj.b, undefined);

// Check fertility
assert.ok(Sub.hasOwnProperty('extend'));
assert.strictEqual(typeof Sub.extend, 'function');
```

## Installation

  Server-side ([Node.js](http://nodejs.org)):
  
    $ npm install func
    
  Client-side ([component(1)](https://github.com/component)):

    $ component install shannonmoeller/func.js

## API

### `Func(...args)`

  Returns an instance of `Func`. Calls `Func.prototype.init` with provided arguments.

### `new Func(...args)`

  Also returns an instance of `Func`. Also calls `this.init` with provided arguments.
  
### `Func.call(ctx, ...args)`

  Nice try. Same as above.
  
### `Func.apply(ctx, args)`

  Guess.
  
### `Func.extend([prot], [stat])`

  `prot` An object containing instance members.

  `stat` An object containing static members.

  Returns a function whose `prototype` object is an instance of `Func`—a subclass if you must. Conveniently copies given instance and static members to the appropriate objects.

## Shout-outs

- Douglas Crockford ([Prototypal Inheritance](http://javascript.crockford.com/prototypal.html), or, the birth of `Object.create`.)
- John Resig ([Simple JavaScript Inheritance](http://ejohn.org/blog/simple-javascript-inheritance/))

## License

  MIT
