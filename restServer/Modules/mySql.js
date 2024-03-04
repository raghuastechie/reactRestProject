const mySql = require('mysql2');
require('dotenv').config();

let con = mySql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password:process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
})

const mySqlCon = (query) => {
    return new Promise((resolve, reject) => {
        let respData = '';
        let err = false;
        con.connect((err) => {
            if(err){
                console.log(`{conErr: ${err}, msg: Ohh Not Connected}`);
                err = true;
            } else {
                console.log({msg: `Yeah !! Connected`});
            }        
        });
        if(!err){
            con.query(query, (err, data) => {
                if(err){
                    console.log(`Err: ${err}`);
                    reject({msg: err, status: 'failure'});
                }else{
                    console.log({msg: data});
                    resolve({msg: data, status: 'success'})                    
                }
            })
        }
    })        
}

module.exports = mySqlCon;