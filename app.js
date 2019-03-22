const express = require('express');
var router = express.Router()
var path = __dirname + '/views/';


const app = express();


router.get("/",function(req,res){
  res.sendFile(path + 'index.html');
});


app.use(express.static('public'));
app.use('/', router);


module.exports = app;