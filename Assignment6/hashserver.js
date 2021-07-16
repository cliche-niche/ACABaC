var express = require('express');
var app = express();
var crypto = require('crypto');

var port = 8787;

app.use(express.json()); // To parse the body of json


app.listen(port, ()=>{
    console.log(`Listening to port ${port} right now.`);
});


app.get('/', function(req, res){
    res.send("You may POST a json with some data to /hash to calculate its SHA-256 hash :)");
});


app.get('/hash', (req, res)=>{
    res.send("Use POST instead.");
});


app.post('/hash', function(req, res){  
    var str = req.body.data;
    var h = crypto.createHash('sha256').update(str);
    str = h.digest('hex');
    res.status(200).json({hash : str});
});