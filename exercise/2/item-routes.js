'use strict';

const {Item}  = require('./item');
const express = require('express');

const router = express.Router();

/**
 * List all items
 */
router.get('', (req, res, next) => {
  try {
    return res.json({items: Item.findAll()})
  } catch (err) {
    return next(err)
  }
});

/**
 * Create one item
 */
router.post('', (req, res, next) => {
  try {
    let item = new Item(req.body.name, req.body.price)
    return res.json({item: item});
  } catch (err) {
    return next(err)
  }
});

/**
 * Retrieve one item by name
 */
router.get('/:name', (req, res, next) => {
  try {
    let item = Item.find(req.params.name, next)
    return res.json({item: item})
  } catch (err) {
    return next(err)
  }
});

/**
 * Update one item
 */
router.patch('/:name', (req, res, next) => {
  try {
    let item = Item.update(req.params.name, req.body, next)
    return res.json({item: item});
  } catch (err) {
    return next(err)
  }
});

/**
 * Delete an item
 */

router.delete('/:name', (req, res, next) => {
  try {
    Item.remove(req.params.name, next);
    return res.json({message: 'Deleted'})
  } catch (err) {
    return next(err)
  }
});

// IMPORTANT: Do not use { router } here. I will throw an error.
module.exports = router;
