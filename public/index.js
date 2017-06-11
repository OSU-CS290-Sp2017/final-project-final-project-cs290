
var placeOrder = document.getElementById("ord");
var restaurants = document.getElementById("restaurants");
var hallList = document.getElementsByClassName("navsub")[0];
hallList.style.display = "none";

function revealOrderBox() {
   var fields = document.getElementsByClassName("order-field");
   for(var i = 0; i < fields.length; i++) {
      	   fields[i].style.display = "block";
   }
}

function revealRemHalls() {
   if (hallList.style.display === "none") {
	   hallList.style.display = "block";
   }else{
	   hallList.style.display = "none";
   }
}
   	   
placeOrder.onclick = function() {revealOrderBox()};
restaurants.onclick = function() {revealRemHalls()};











