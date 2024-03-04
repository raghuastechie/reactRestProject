const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const port = process.env.PORT || 3001;
const gMys = require('./routes/genMysql');
const kMys = require('./routes/knexMysql');
const mDB = require('./routes/mongoose');
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['*']
}))
app.use('/kMys', kMys);
app.use('/gMys', gMys);
app.use('/mDB', mDB);

app.get('/', (req, res) => {
    res.send({msg: 'success'});
})

app.listen(port, () => console.log(`Listening on ${port}`))