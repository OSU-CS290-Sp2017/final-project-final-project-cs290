
var placeOrder = document.getElementById("ord");
var restaurants = document.getElementById("restaurants");
var hallList = document.getElementsByClassName("navsub")[0];
var orderBox = document.getElementById("order-box");
hallList.style.display = "none";
orderBox.style.display = "none";

function revealRemove(ele) {
   if (ele.style.display === "none") {
	   ele.style.display = "block";
   }else{
	   ele.style.display = "none";
   }
}
   	   
placeOrder.onclick = function() {revealRemove(orderBox)};  //shows and hides order box
restaurants.onclick = function() {revealRemove(hallList)};  //shows and hides restaurants in restaurant selection tab











