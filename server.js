var express = require('express');
var bodyParser = require('body-parser');
var middleWare = require('./_middleware/hash');

var app = new express();

app.use(bodyParser.json());

app.get('/home', function(req, res){
    res.send('ok');
})
app.get('/blog', function(req, res){
    res.send('hi');
})
app.get('/taco', function(req, res){
    res.send('burrito');
})
app.get('/chicken', function(req, res){
    res.send('KFC');
})
app.get('/jumanji', function(req, res){
    res.send('rob likes it');
})
app.get('/heyyy', function(req, res){
    res.send('3 y');
})
app.get('/boi', function(req, res){
    res.send('jolly');
})
app.get('/yum', function(req, res){
    res.send('bootylicious');
})
app.get('/pikachu', function(req, res){
    res.send('pika');
})


app.post('/test', middleWare.change, function(req, res){
    var data = req.body;

    data.email = 'kyle@urabntxt.com';

    res.send(data);
})


var port = 3000;
app.listen(port, function() {
    console.log('listening on port', port);
})