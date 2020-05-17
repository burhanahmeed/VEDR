const UsersModel = require('../models/users.model.js');

module.exports = {
    getUser: async (req, res) => {
        try {
            // let users = await fetch('https://covid19.mathdro.id/api')
            // let getUser = await users.json();
            // console.log(getUser)
            return res.status(200).json({
                status: 200,
                data: require('../staticData/users')
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error
            });
        }
    },
    getUserFromMongoDB: async (req, res) => {
        try {
            let getUser = await UsersModel.get();
            if (!getUser) {
                throw 'Error when getting users!'
            }
            return res.status(200).json({
                status: 200,
                data: getUser
            })
        } catch (error) {
            return res.status(500).json({
                status: 500,
                error
            });
        }
    }
}