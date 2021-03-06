//an example to script serverside with express

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
/*app.use('/', function(req, res, next){
  console.log(req.url);
  next();
})*/
app.use('/Style', express.static('Style'));
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', function(req, res){
    res.sendFile('index.html',  {'root': __dirname + '/../'}); // level up the path(to its parent folder)
  });
//////////////////////////////////////////////////////////////////////same route but different methods
  app.get('/contact', function(req, res){
    res.render('contactTemplate');
  });
  app.post('/contact', urlencodedParser, (req,res) => {
    console.log(req.body);
    //res.render('contactSuccessTemplate');
  });
/////////////////////////////////////////////////////////////////////
app.get('/profile/:name', function(req, res){
    var data = {age: 40, title: 'Manager', car: ['Wu', 'Ling', 'Hong', 'Guang']};
    res.render('viewTemplate', {person: req.params.name, info: data});
  });


 app.listen(8080);
