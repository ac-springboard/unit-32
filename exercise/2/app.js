'use strict';

const express           = require("express")
const app               = express()
const iRoutes           = require("./item-routes")
const {Middleware: mdw} = require('./middleware')

app.use(express.json())
app.use("/items", iRoutes)

app.use("/favicon.ico", () => {
  console.log("Ôôôô...");
});

/**
 * 404 Error Handler
 */

app.use(function (req, res, next) {
  // return new ErrorHandler("Not Found", 404);
  mdw.checkForHTTPErrors(req, res, next)
  // next();
});


/**
 * Glogal error handler
 */

app.use(function (err, req, res, next) {

  return res.json({
    error: {
      status : err.status,
      message: err.msg
    }
  });
});

module.exports = app
