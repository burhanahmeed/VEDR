const { Schema } = require('mongoose');
const { database } = require('../bootstrap');
const mongoose = database('mongodb');

const usersSchema = new Schema({
    name: String,
    dob: Date,
    address: String, 
    email: String
}, {
    collection: 'users',
    timestamps: true
});

const Users = mongoose.model('Users', usersSchema);

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {            
            Users.find(params)
            .exec((err, result) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve(result)
            })
        })
    }
}