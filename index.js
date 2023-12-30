var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Product');
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function (callback) {
  console.log("connection succeeded");
})

var app = express()
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/register', function (req, res) {
  var Name = req.body.name;
  var Number = req.body.num;
  var Gender = req.body.gen;
  var Email = req.body.email;
  var dob = req.body.dob;
  var address = req.body.add;
  var id = req.body.id;
  var proof = req.body.proof;
  var zone = req.body.zone;
  var society = req.body.sname;
  var Products = req.body.pro;
  var Price = req.body.price;
  var data = {
    "name": Name,
    "num": Number,
    "gen": Gender,
    "email": Email,
    "dob": dob,
    "add": address,
    "id": id,
    "proof": proof,
    "zone": zone,
    "sname": society,
    "pro": Products,
    "price": Price,
  }
  db.collection('details').insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });
  return res.redirect('sucess.html');
})

app.listen(7000, function () {
  console.log("server listening at port 7000");
});
