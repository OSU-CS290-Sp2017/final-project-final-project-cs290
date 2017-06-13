
var orderData = document.getElementById("ord");
var closeOrder = document.getElementsByClassName("cancel-order")[0];
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
closeOrder.onmousedown = function() {revealRemove(orderBox)}; //^^^^^^^^^^^^^^^^^^^^^^^^
restaurants.onclick = function() {revealRemove(hallList)};  //shows and hides restaurants in restaurant selection tab

function expand(num){
	//console.log("In expand function");
	if (expandList[num].style.display === "none" || expandList[num].style.display === ""){
		//console.log("Diplay was none");
		expandList[num].style.display = "block";
		expandBox[num].style.borderBottomLeftRadius = "0px";
		expandBox[num].style.borderBottomRightRadius = "0px";
	}else{
		//console.log("display was ", expandList[num].style.display);
		expandList[num].style.display = "none";
		expandBox[num].style.borderBottomLeftRadius = "20px";
		expandBox[num].style.borderBottomRightRadius = "20px";
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

var placeOrder = document.getElementsByClassName('submit-order')[0];

function storeOrderData() {

  var nameData = document.getElementById('name-input').value;
  var IDData = document.getElementById('ID-input').value;
  var orderData = document.getElementById('order-input').value

  var postURL = '/';
  var postRequest = new XMLHttpRequest();
  postRequest.open('POST',postURL);
  postRequest.setRequestHeader('Content-Type', 'application/json');

    // postRequest.addEventListener('load',function(event){
    //   var error;
    //   if(event.target.status !== 200){
    //     error = event.target.response;
    //   }
    //   callback(error);
    // });

    var postObj = {
      name: nameData,
      ID: IDData,
      order: orderData
    };

    postRequest.send(JSON.stringify(postObj));
}

placeOrder.onclick = function(){storeOrderData()};
