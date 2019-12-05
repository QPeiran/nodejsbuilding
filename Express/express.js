//an example to script serverside with express

 const express = require('express');

 const app = express();

 app.set('view engine', 'ejs');

  app.get('/', function(req, res){
    res.sendFile('index.html', {'root': __dirname + '/../'}); // level up the path(to its parent folder)
  });

  app.get('/readme', function(req, res){
    res.sendFile('README.MD', {'root': __dirname + '/../'});
  });

  app.get('/profile/:name', function(req, res){
    res.render('viewTemplate', {person: req.params.name});
  });


 app.listen(8080);
