'use strict';

const {items}           = require("./fakeDb")
const {Middleware: mdw} = require('./middleware')

class Item {
  constructor(name, price) {
    this.name  = name;
    this.price = price;
    items.push(this)
  }

  static findAll() {
    return items
  }

  static update(name, data, next) {
    let item = Item.find(name)
    mdw.check404Error(item, next)
    item.name  = data.name
    item.price = data.price

    return item;
  }

  static find(name, next) {
    const item = items.find(v => v.name === name);
    mdw.check404Error(item, next)
    return item
  }

  static remove(name, next) {
    let index = items.findIndex(v => v.name === name);
    mdw.check404Error(index, next)
    items.splice(index, 1)
  }
}

module.exports = {
  Item
}
