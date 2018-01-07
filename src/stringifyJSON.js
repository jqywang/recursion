// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var jsonString = '';
  if (Array.isArray(obj)){
  	//add brackets on each side, run stringify on each element of array
  } else if (typeof obj === 'object'){
  	//add curly brackets on each side, run stringify on each element
  } else if (obj && typeof obj === 'string'){
  	//add quotes on each side
  }
  return ''+ obj;
};
