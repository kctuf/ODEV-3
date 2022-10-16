const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const { middlewForAll, middlewForPost } = require('./middlewares/appmainMiddlewares');
const { format } = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/hello', middlewForAll, (req, res) => {
    res.send('Merhaba, Get isteği attınız');
});

app.post('/hello', middlewForAll, middlewForPost, (req, res) => {
    res.send('Merhaba, Post isteği attınız');
});

app.put('/hello', middlewForAll, (req, res) => {
    res.send('Merhaba, Put isteği attınız');
});

app.delete('/hello', middlewForAll, (req, res) => {
    res.send('Merhaba, Delete isteği attınız');
});

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}.`);
});