// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var finArray = [];
  console.log('Input:', json);
  //console.log('Expected:', JSON.parse(json));
  console.log(json[0]);
  if (json[0] === '[') {
    if(json[1] === ']') {
      return [];
    }
    var ind = json.indexOf(',');
    if (ind === -1) {
      ind = json.indexOf(']');
    }
    var val1 = json.substring(1, ind - 1);
    val1 = val1.replaceAll('"', '');
    finArray.push(val1);
    if (json.indexOf(']') !== ind) {
      finArray = finArray.concat(parseJSON(json.substring(ind + 2)));
    }
      console.log(finArray);
    return finArray;
  }
  if (json[0] === '{') {
    var value, key;
    if (json[1] === '}') {
      return {};
    }
    console.log('T1');
    var ind = json.indexOf(':');
    key = json.substring(1, ind);
    if (json.indexOf(',') !== -1) {
      value = json.substring(ind + 1, json.indexOf(','));
    } else {
      console.log(ind)
      value = json.substring(ind + 1, json.length - 1);
    }

    console.log(ind, key , value);
    var obj = {};
    console.log('Change', value.length);
    if (value === ' ""') {
      console.log('T2');
      value = '';
    }
    key = key.replaceAll('"','');
    value = value.replaceAll('"','');
    value = value.replaceAll(' ','');

    obj[key] = value;
    //RECURSION
    console.log(obj);
    return obj;
  }
  if (json.constructor === String) {
    json = json.replaceAll(']', '');
    return json.replaceAll('"','');
  }
};
