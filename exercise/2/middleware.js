'use strict';

const {errors}       = require('./error-list')
const {ErrorHandler} = require('./error-handler')

class Middleware {

  static throw404Error(next) {
      throw new ErrorHandler(errors['404'])
  }

  static check404Error(ref, next){
    if ( ref === null || ref === undefined || ref === -1 ){
      Middleware.throw404Error(next)
    }
  }

}

module.exports = {
  Middleware
};
