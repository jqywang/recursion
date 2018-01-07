// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var jsonString = '';
  if (Array.isArray(obj)){
  	var arrayString = obj.map(function(obj){return stringifyJSON(obj)});
  	return '[' + arrayString + ']'
  } else if (obj && typeof obj === 'object'){
  	var keyValue = [];
  	for (var key in obj) {
  		if(key !== undefined && obj[key] !== undefined && typeof obj[key] !== 'function'){
  			keyValue.push('"'+ key + '"' + ':' + stringifyJSON(obj[key]));
  		}
  	}
  	keyValue.join(',');
  	return '{' + keyValue + '}';
  } else if (typeof obj === 'string'){
  	return '\"' + obj + '\"'
  }
  return obj + '';
};
