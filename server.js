const express = require('express')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const API = require('./api')

app.prepare()
.then(() => {
  const server = express()

  server.use('/api', API)

  server.get('/items/:id', (req, res) => {
    const actualPage = '/detail'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/items', (req, res) => {
    const actualPage = '/items'
    const queryParams = { search: req.query.search }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })

})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
