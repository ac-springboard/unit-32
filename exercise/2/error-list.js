'use strict';

const errors = {
  404: {message: 'Resource not found', status: 404},
  500: {message: 'Server side error', status: 500}
};

module.exports = {
  errors
}
