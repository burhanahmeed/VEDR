const getDatabase = (dbname, number=null) => {
    if (number = null) {
        number = 0;
    }
    return require(`./${dbname}.settings.js`).getConnection(number);
}

module.exports = getDatabase;