const express = require('express');

const app = express();

app.get('/api/list', (req, res) => {
    res.send('<h1>hi</h1>');
});