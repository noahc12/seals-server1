var express = require('express');
var bodyParser = require('body-parser');
var middleWare = require('./_middleware/hash');
var cors = require('cors')


var app = new express();
app.use(cors())
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
app.post('/pikachu', function(req, res){
    res.send([{
        title: 'my first journal',
        content: 'my first journal content',
        now: new Date(),
        
      },
      {
        title: 'my second journal',
        content: 'my second journal content',
        now: new Date(),
      },
      {
        title: 'my third journal',
        content: 'my third journal content',
        now: new Date(),
      }]);
})

app.post('/test', middleWare.change, function(req, res){
    var data = req.body;

    data.email = 'pikachu45@gmail.com';

    res.send(data);
})
// app.post('/charmander', middleWare.squirtle, function(req, res){
//     var data = req.body;

//     data.email = 'pikachu45@gmail.com';

//     res.send(data);
// })

var port = 3000;
app.listen(port, function() {
    console.log('listening on port', port);
})