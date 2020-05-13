const applicationAPI = require('./application');

module.exports = {
	devServer: {
		before: applicationAPI
	}
}