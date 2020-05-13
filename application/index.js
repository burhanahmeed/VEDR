const bodyParser = require('body-parser')
const api = require('./router')

module.exports = app => {
  app.use(bodyParser.json())
  app.use('/api', api)
}
