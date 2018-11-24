require('dotenv').load();


var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var middleWare = require('./_middleware/hash');
var cors = require('cors');

var app = new express();


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('connected to database')
});

// define models for mongoose
var blogsSchema = new mongoose.Schema({
    title: String,
    content: String
})

var Blog = mongoose.model('Blog', blogsSchema);

app.use(bodyParser.json());
app.use(cors());

app.get('', function (req, res) {
    res.send('ok');
})

app.post('/addNewBlog', function (req, res) {
    var data = req.body;

    var newBlog = new Blog(data);

    newBlog.save(function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({ data: 'Data was saved!' });
        }
    });
})

app.get('/getData', function (req, res) {
    Blog.find(function (err, data) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({ data: data });
        }
    })
})

app.post('/getJournal', function (req, res) {
    var id = req.body.id;

    Blog.findById(id, function (err, data) {
        res.send({ data: data })
    });
})

var port = 3000;
app.listen(port, function () {
    console.log('listening on port', port);
})