'use strict';

const errors = {
  invalid_number: {msg: 'Invalid number in the list', status: 400},
  empty_list: {msg: 'No number provided', status: 400}
};

module.exports = {
  errors
}
