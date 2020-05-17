const bodyParser = require('body-parser')
const api = require('./router')
const { connectAll } = require('./bootstrap/database');

module.exports = app => {
  connectAll();
  app.use(bodyParser.json())
  app.use('/api', api)
}
