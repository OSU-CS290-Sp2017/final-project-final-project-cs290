
var placeOrder = document.getElementById("ord");

function revealOrderBox() {
   var fields = document.getElementsByClassName("order-field");
   for(var i = 0; i < fields.length; i++) {
      	   fields[i].style.display = "block";
   }
}

placeOrder.onclick = function() {revealOrderBox()};



   





