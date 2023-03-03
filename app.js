const express = require('express');
const {json} = require("express");

const app = express();

app.use(express.json);
app.use(express.urlencoded({extended: true}));

const PORT = 5100;

app.listen(PORT, () => {
    console.log('server has started');
});

app.get('/users', (req, res) => {

    console.log('USERS ENDPOINT')

});