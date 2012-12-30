# func

  A better JavaScript constructor pattern. Takes away the bad parts of `new`, but maintains a distinction between static properties and prototype properties. Unlike `Object.create`.

## Installation

  Server:
  
    $ npm install func
    
  Client:

    $ component install shannonmoeller/func.js

## API

### `Func(...)`

  Returns an instance of `Func`. Calls `Func.prototype.init` with provided arguments.

### `new Func(...)`

  Also, returns an instance of `Func`. Also calls `this.init` with provided arguments.
  
### `Func.call(...)`

  Nice try. Same as above.
  
### `Func.apply(...)`

  Guess.
  
### `Func.extend([proto], [stat])`

  Returns a function whose `prototype` object is an instance of `Func`. A subclass if you must.

## License

  MIT
