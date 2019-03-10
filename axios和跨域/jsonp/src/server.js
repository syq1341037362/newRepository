//使用express
const express = require('express');

const app = express();

app.get('/say', function(req, res) {
    let { wd, cb } = req.query
    console.log(req.query)
    console.log(cb)
    res.end(`${req.query.callback}('我不爱你')`)
})

app.listen(3000);