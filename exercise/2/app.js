'use strict';

const express           = require("express")
const app               = express()
const iRoutes           = require("./item-routes")
const {Middleware: mdw} = require('./middleware')
const {errors} = require('./error-list')
const {ErrorHandler} = require('./error-handler')

app.use(express.json())
app.use("/items", iRoutes)

app.use("/favicon.ico", () => {
  console.log("Ôôôô...");
});

/**
 * 404 Error Handler
 */

app.use(function (req, res, next) {
  mdw.throw404Error(next)
  // next(new ErrorHandler(errors['404']))
});


/**
 * Global error handler
 */

app.use(function (err, req, res, next) {
  // console.log( res.status)
  return res.json({
    error: {
      status : err.status,
      message: err.message
    }
  });
});

module.exports = {
  app
}
