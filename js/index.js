var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Message = require('./models/message');

mongoose.connect('mongodb://localhost:27017/chat')

var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.post('/add', function(req, res){
  Message.create({ author: req.body.author, message: req.body.message }, function(err, message) {
    if(err){
      console.log(err);
    } else {
        //console.log(message);
        res.status(200).json(message);
    }
  })
})

app.post('/', function(req, res){
  Message.find({}, function(err, messages) {
    if(err){
      console.log(err);
    } else {
        res.status(200).json({messages});
    }
  })
})


app.listen(3333, function() {
  console.log('Server is up!');
});
