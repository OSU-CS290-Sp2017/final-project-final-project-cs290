var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
var exphbs = require('express-handlebars');
var hbs = require('handlebars');
var hallData = require('./hallData');
var port = process.env.PORT || 3000;


app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname,'public')));

hbs.registerHelper("list",function(items,options){
  var list = "<ul>";
    for (var i=0, l=items.length;i<l; i++){
      list = list + "<li class='rest-food'>" + options.fn(items[i]) + "</li>";
  }
  return list+"</ul>";
});

app.get('/',function(req,res,next){

  var tempArgs = {
    hall: hallData
  }

  res.render('diningPage.handlebars',tempArgs);

});

app.get('/:hall', function(req,res,next){
  console.log('==url params for request:',req.params);
  var hall = req.params.hall;
  var restData = hallData[hall];
  if (restData) {
    var tempArgs = {
      rest: restData.restaurants,
      restText: restData.restaurants.restText,
	  imgurl: restData.restaurants.imgurl,
      items: restData.restaurants.items,
      }
    res.render('restPage.handlebars',tempArgs);

  }else{
  next();
}
});

app.get('*', function(req,res,next){

  res.render('404Page');

});

app.listen(port, function(){
  console.log(' ==server listening on port', port);
});
