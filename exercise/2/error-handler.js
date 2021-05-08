'use strict';

class ErrorHandler extends Error {
  constructor(err) {
    super();
    this.msg    = err.msg;
    this.status = err.status;
    console.error(this.stack);
  }
}

module.exports = {
  ErrorHandler
};
