var handlebars = require('handlebars');

handlebars.registerHelper('list', function(items,options){
  var list = null;
  for (var i = 0 ;i < items.length;i++){
    list = list + "<li>" + items[i] +"</li>";
  }
  return list;
});
