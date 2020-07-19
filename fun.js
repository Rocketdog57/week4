function findArea(width, height) {
	var dimension = width * height;
	return dimension;
  }  
 
 console.log("Your dimension is: " +  findArea(10, 15));


 /*Adding function with two args*/
function findArea(width, height) {
	var dimension = width + height; {
	console.log("the dimension is: " + findArea(10, 15)); 
 }  
}

findArea()
  

  
  /*function for looping through numbers*/

function numCount() {
	for (first = 0; first < 100; first++) {
	  console.log(first);
	}
  
  }
  
  numCount()

  /*scopes*/
  function myDog() {
	var name = "Brownie";
	return name;
  }
	   
  
  var myMeanDog = myDog();
  console.log(myMeanDog);
  console.log(name); 
  
  myDog()

  /*IIFE*/
  (function numCount() {
	for (first = 0; first < 100; first++) {
	  console.log(first);
	}
  
  })()
  