const express = require('express');
const app = express();
var path = require("path");
const appRoot = require('app-root-path');
const applicationAPI = require('../application');

var pathEnv = '/.env'
if (process.env.NODE_ENV == 'development') {
	pathEnv = '/.env.local';
}

applicationAPI(app);

require('dotenv').config({path: appRoot + pathEnv})

// const directory = process.env.NODE_ENV == 'development' ? 'public' : process.env.FE_DIR;
const directory = `/${process.env.FE_DIR}`;
const dist = appRoot + directory;

const port = process.env.PORT || 3000;

app.use(require('./middleware/dynamic.js'));

app.use('/', express.static(dist));

app.use('*', (req, res) => {
	res.sendFile(path.join(dist, 'index.html'));
})

app.listen(port, () => {
    console.log(`Web server is running at port ${port}`);
});