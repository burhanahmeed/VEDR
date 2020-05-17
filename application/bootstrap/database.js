const databaseList = {
    mongodb: [
        {
            url: process.env.MONGO_URL_ONE
        }
    ]
}

class Database {
    constructor (databaseConnection, dbname) {
        this.connection = [];
        this.connection_driver = databaseConnection;
        this.dbname = dbname;
    }

    getConnection (number) {
        if (!number) {
            number = 0;
        }
        if (this.connection[number]) {
            return this.connection[number];
        } else {
            if (databaseList[this.dbname].hasOwnProperty(number)) {
				this.connection[number] = this.connection_driver(databaseList[this.dbname][number]);
				return this.connection[number]
			} else {
				console.warn(`app:database Database ${this.dbname} number ${number} is not exist on configuration !`)
				return null
			}
        }
    }
}

const connectAll = () => {
    let conn = {};
    for (const dbname in databaseList) {
        conn[dbname] = []
		for (var i = 0; i < databaseList[dbname].length; i++) {
			conn[dbname].push(require(`./database/${dbname}.settings.js`).getConnection(i))
		}
    }
    return conn;
}



module.exports = {
    connectAll,
    Database
}