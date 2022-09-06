// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  console.log('Input:', json);
  console.log('Expected:', JSON.parse(json));

  if (json === '[]') {
    return [];
  }
  if (json[0] === '{') {
    var ind = json.indexOf(':');
    var key = json.subString(1, ind);
    var value = json.subString(ind + 1, )
    console.log(key , value);
  }
};
