process.env.NODE_ENV = 'test'
/* npm dependencies */
const request = require('supertest')
/* Local dependencies */
const {app}  = require('./app')
const {Item} = require('./item.js')
let {items}  = require('./fakeDb')
/* Test variable */
const abacaxi = {'name': 'Abacaxi', price: 0.50}
const abrico  = {'name': 'Abricó', price: 0.60}
const ameixa  = {'name': 'Ameixa', price: 0.70}

// IMPORTANT: I've used the 'setTimeout()' function to
//            simulate the lag between requests and to
//            make sure that the beforeEach() and afterEach()
//            functions have time to run before the tests.

describe('Item CRUD', async function () {
  beforeEach(async function () {
    items.push(ameixa)
    console.log('before', items)
  })
  afterEach(async function () {
    items = []
    console.log('after', items)
  })

  test('Add one item', async function () {
    const res = await request(app)
      .post('/items')
      .send(new Item('Abacaxi', 0.50))
    expect(res.statusCode).toEqual(200)
    expect(res.body.item).toEqual(abacaxi)
  });

  test('Update one item', async function () {
    const res = await request(app)
      .patch('/items/Ameixa')
      .send(abrico)
    expect(res.statusCode).toEqual(200)
    expect(res.body.item).toEqual(abrico)
    console.log('updated:', res.body.item)
  })

  test('Retrieve one item', async function () {
    setTimeout(async function () {
      console.log('retrieve/items:', items)
      const res = await request(app)
        .get('/items/Ameixa')
      expect(res.statusCode).toEqual(200)
      expect(res.body.item).toEqual(ameixa)
    }, 500)
  })
  describe('Delete one item - two steps', async function () {
    test('Delete one item', async function () {
      setTimeout(async function () {
        const res = await request(app)
          .delete('/items/Ameixa')
        expect(res.statusCode).toEqual(200)
        expect(res.body.message).toEqual('Deleted')
      }, 500)
    })
    test('Check 404 for the deleted item', async function () {
      setTimeout(async function () {
        const res = await request(app)
          .get('/items/Ameixa')
        expect(res.body.error.status).toEqual(404)
      })
    }, 750)
  })
});
