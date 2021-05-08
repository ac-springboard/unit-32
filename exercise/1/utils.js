'use strict';

const {errors}       = require('./error-list');
const {ErrorHandler} = require('./error-handler');

class Utils {

  static validateQuery(query) {
    if ( !query.nums) {
      throw new ErrorHandler(errors.empty_list);
    }

    const arr = query.nums.split(',');
    arr.map(item => {
      if ( !Number(item)) {
        throw new ErrorHandler(errors.invalid_number);
      }
    });
  }

}

module.exports = {
  Utils
};
