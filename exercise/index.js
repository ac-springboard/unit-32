'use strict';

const express        = require('express');
const {Utils: utils} = require('./utils');
const {Statistics}   = require('./statistics');

const app = express();

/**
 * Validates the query for each request
 */
app.use((req, res, next) => {
  utils.validateQuery(req.query);
  next();
});

/**
 * Mean
 */
app.get('/mean', (req, res) => {
  const stat = new Statistics(req.query.nums);
  return res.send(stat.mean());
});

/**
 * Median
 */
app.get('/median', function (req, res, next) {
  const stat = new Statistics(req.query.nums);
  return res.send(stat.median());
});

/**
 * Median
 */
app.get('/mode', function (req, res, next) {
  const stat = new Statistics(req.query.nums);
  return res.send(stat.mode());
});

/**
 * Error
 */
app.use(function (err, req, res, next) {

  return res.json({
    error: {
      status : err.status,
      message: err.msg
    }
  });
});

app.listen(3000, function () {
  console.log(`Listening to port 3000`);
});
