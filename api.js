const Router = require('express').Router
const fetch = require('isomorphic-unfetch')

const API = Router()


API.get('/items/:id/description', function (req, res, next) {
  fetch(`https://api.mercadolibre.com/items/${req.params.id}/description`)
  .then(response => response.json())
  .then(data => {
    res.json(data)
    console.log('item description:', data)
  })
})

API.get('/items/:id', function (req, res, next) {
  fetch(`https://api.mercadolibre.com/items/${req.params.id}`)
  .then(response => response.json())
  .then(data => {
    res.json(data)
    console.log('item:', data)
  })
})

API.get('/items', function (req, res, next) {
  fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.search}`)
  .then(response => response.json())
  .then(data => {

    const items = data.results
    .map(({id, title, price, currency_id, thumbnail, condition, free_shipping }) => {
      return {
        id,
        title,
        price: {
          amount: price,
          currency: currency_id,
          decimals: null
        },
        thumbnail,
        condition,
        free_shipping
      }
    })

    const categories = data.results
    .map(category => category.category_id)
    .reduce(function(prev, curr) {
      if (prev.indexOf(curr) < 0) prev.push(curr)
      return prev
    },[])

    res.json({
      categories,
      items
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
