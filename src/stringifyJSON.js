// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //obj.constructor === Function, Array, null, undefined, Object
  console.log(obj);
  var sum;
  if (obj === null || obj === undefined) {
    return String(obj);
  }
  if (obj.constructor === Number || obj.constructor === Boolean) {
    //console.log(String(obj));
    return String(obj);
  }
  if (obj.constructor === String) {
    return '"' + obj + '"';
  }

  if (obj.constructor === Array) {
    console.log(obj);
    if (obj[0] === undefined) {
      return "[]";
    }
    sum = '';
    for (var i = 0; i < obj.length; i++) {
      console.log(obj[i]);
      sum += stringifyJSON(obj[i]) + ',';
      console.log(sum);
    }
    return '[' + sum.substring(0, sum.length - 1) + ']';
  }
  if (obj.constructor === Object) {
    if (Object.keys(obj)[0] === undefined) {
      return '{}';
    }
    sum = '';
    for(var key in obj) {
      sum += stringifyJSON(key) + ':';
      if (obj[key] === undefined) {
        return '{}';
      }
      sum += stringifyJSON(obj[key]) + ',';
    }
    return '{' + sum.substring(0, sum.length - 1) + '}';
  }
};
