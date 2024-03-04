const express = require('express');
const router = express.Router();
const mySql = require('../Modules/mySql');

router.get('/', async (req, res) => {
    try{
        let resp = await mySql(`SELECT * FROM EMPLOYEE`);
        if(resp) res.send(resp);
    }catch(e){
        res.send(e);
    }
});

router.post('/', async (req, res) => {
    let obj = req.body;
    obj.id ? obj.id = obj.id : obj.id = 999;
    obj.name ? obj.name = obj.name : obj.name = 'nameNull';
    obj.location ? obj.location = obj.location : obj.location = 'locationNull'
    try{
        let resp = await mySql(`insert into employee values (
            ${obj.id}, '${obj.name}', '${obj.location}')
        `);
        if(resp) res.send(resp);
    }catch(e){
        res.send(e);
    }
})

module.exports = router;