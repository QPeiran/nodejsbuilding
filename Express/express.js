//an example to script serverside with express

 const express = require('express');

 const app = express();

  app.get('/', function(req, res){
    res.sendFile('index.html', {'root': __dirname + '/../'}); // level up the path(to its parent folder)
  });

  app.get('/contact', function(req, res){
    res.send('this is the contact page');
  });

  app.get('/profile/:id', function(req, res){
    res.send('this is the id: ' + req.params.id);
  });


 app.listen(8080);
