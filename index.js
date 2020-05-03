const express = require('express');
const app = express();

var pathEnv = '/.env'
if (process.env.NODE_ENV == 'development') {
	pathEnv = '/.env.local'
}

require('dotenv').config({path: __dirname + pathEnv})

var path = require("path");

const dir = process.env.FE_DIR;

const dist = path.join(__dirname, dir);

const port = process.env.PORT || 3000;

app.use(require('./service/middleware/dynamic.js'));

app.use('/', express.static(dist));

app.use('*', (req, res) => {
	res.sendFile(path.join(dist, 'index.html'));
})

app.listen(port, () => {
    console.log(`Web server is running at port ${port}`);
});

// http.createServer(app).listen(80)