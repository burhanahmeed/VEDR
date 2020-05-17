const mongoose = require('mongoose');
const { Database } = require('../database');

const mongoConnect = (config) => {
    /**
        mongoose.set('useCreateIndex', true)
        mongoose.set('useFindAndModify', false);
        mongoose.set('autoIndex', false);
        mongoose.set('useUnifiedTopology', true);
    */
    let options = {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
    var conn = mongoose.createConnection(config.url, options);
    conn.on('error', () => {
        console.error.bind(console, 'app:database MongoDB connection error : \n')
    });
    conn.on('open', () => {
        console.log('app:DB Mongodb connection success!')
    })
    return conn;
}

var db = new Database(mongoConnect, 'mongodb')

module.exports = db;