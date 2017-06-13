
var orderData = document.getElementById("ord");
var restaurants = document.getElementById("restaurants");
var hallList = document.getElementsByClassName("navsub")[0];
var orderBox = document.getElementById("order-box");
var expandBox = document.getElementsByClassName("rest-text");
var expandList = document.getElementsByClassName("rest-items");
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

function expand(num){
	if (expandList[num].style.display === "none"){
		expandList[num].style.display = "block";
		expandBox[num].style.borderBottomLeftRadius = "0px";
		expandBox[num].style.borderBottomRightRadius = "0px";
	}else{
		expandList[num].style.display = "none";
		expandBox[num].style.borderBottomLeftRadius = "30px";
		expandBox[num].style.borderBottomRightRadius = "30px";
	}
}

for(var i=0; i<expandBox.length; i++)
{
	(function(i){
		expandBox[i].onclick = function() {expand(i)};
	})(i);
}
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
