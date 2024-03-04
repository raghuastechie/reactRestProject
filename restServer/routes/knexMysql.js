const express = require('express');
const router = express.Router();
const knex = require('../Modules/kMySql');

router.get('/', async(req, res) => {
    try{
        let resp = await knex('employee');
        if(resp) res.send({msg: resp, status: 'success'});
    }catch(e){
        res.send({msg: e, status: 'Failure..'});
    }
});

module.exports = router;