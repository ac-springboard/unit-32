'use strict';

class ErrorHandler extends Error {
  constructor(err) {
    super();
    this.message = err.message;
    this.status  = err.status;
    // console.error(this.stack);
  }
}

module.exports = {
  ErrorHandler
}
