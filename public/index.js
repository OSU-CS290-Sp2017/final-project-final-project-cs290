
var orderData = document.getElementById("ord");
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

orderData.onclick = function() {revealRemove(orderBox)};  //shows and hides order box
restaurants.onclick = function() {revealRemove(hallList)};  //shows and hides restaurants in restaurant selection tab

//This function places the order by turning the strings into a JSON object
//for later use.

var placeOrder = document.getElementById('place-order');

function storeOrderData() {

  var nameData = document.getElementById('name-input').value;
  var addressData = document.getElementById('address-input').value;
  var orderData = document.getElementById('order-input').value

  var orderObj = {"name":nameData, "address":addressData, "order":orderData};
  
}

placeOrder.onclick = function(){storeOrderData()};
