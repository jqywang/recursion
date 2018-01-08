// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element) {
  var elementsArray = [];
  if(element === undefined){
  	element = document.body;
  }
	if(element.classList !== undefined){  
	  if(element.classList.contains(className)){
	  	elementsArray.push(element);
	  }
	}
  for(var i = 0; i<element.childNodes.length; i++){
  	var childrenList = getElementsByClassName(className, element.childNodes[i]);
  	elementsArray = elementsArray.concat(childrenList);
  }
  return elementsArray;
};
