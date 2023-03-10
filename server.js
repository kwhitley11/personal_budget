const express = require('express');
const app = express();
const PORT = 3000;
const { envelopes, salary } = require('/Users/whitlekp/Documents/projects/personal_budget/util/data.js');




app.get('/', (req, res, next) => {
    res.send('Hello, World!!');
});


app.get('/envelopes', (req, res, next) => {
    res.send('get request received');
});








app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
});