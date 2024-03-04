const knex = require('knex');
const kDB = knex({
    client: 'mysql2',
    connection: {
        host: process.env.MYSQLHOST,
        user: process.env.MYSQLUSER,
        password:process.env.MYSQLPASSWORD,
        database: process.env.MYSQLDATABASE,
        port: process.env.MYSQLPORT
    }
});

module.exports = kDB;