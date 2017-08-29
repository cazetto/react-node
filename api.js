const Router = require('express').Router
const fetch = require('isomorphic-unfetch')
const async = require('async')

const API = Router()

API.get('/currencies/:id', function (req, res, next) {
  fetch(`https://api.mercadolibre.com/currencies/${req.params.id}`)
  .then(response => response.json())
  .then(data => {
    res.json(data)
  })
})

API.get('/currencies/', function (req, res, next) {
  fetch(`https://api.mercadolibre.com/currencies/`)
  .then(response => response.json())
  .then(data => {
    res.json(data)
  })
})

API.get('/items/:id/description', function (req, res, next) {
  fetch(`https://api.mercadolibre.com/items/${req.params.id}/description`)
  .then(response => response.json())
  .then(data => {
    res.json(data)
  })
})

API.get('/items/:id', function (req, res, next) {
  fetch(`https://api.mercadolibre.com/items/${req.params.id}`)
  .then(response => response.json())
  .then(data => {
    res.json(data)
  })
})

API.get('/items', function (req, res, next) {
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.search}`)
  .then(response => response.json())
  .then(data => {
    const items = data.results
    .map(({id, title, price, currency_id, thumbnail, condition, free_shipping, sold_quantity }) => {
      return {
        id,
        title,
        price: {
          amount: price,
          currency_id,
        },
        picture: thumbnail,
        condition,
        free_shipping,
        sold_quantity
      }
    })

    const categories = data.results
    .map(category => category.category_id)
    .reduce(function(prev, curr) {
      if (prev.indexOf(curr) < 0) prev.push(curr)
      return prev
    },[])

    fetch(`https://api.mercadolibre.com/currencies/`)
    .then(response => response.json())
    .then(currencies => {
      const itemsWithCurrency = items.map(item => {
        const currency = currencies.find((element, index, array) => item.price.currency_id === element.id) || {}
        item.price.currency = currency.symbol
        item.price.decimals = currency.decimal_places
        return item
      })

      res.json({categories, items: itemsWithCurrency})
    })
  })
})

API.use(function(err, req, res, next){
  res.status(err.status || 500);
  log.error('%s %d %s', req.method, res.statusCode, err.message);
  res.json({
    error: err.message
  });
  return;
});

module.exports = API
