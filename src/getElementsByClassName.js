// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //console.log(className);
  var element = arguments[1];
  if (element === undefined) {
    element = document.body;
  }
  //console.log("Child Nodes", element.childNodes, ' class list: ', element.classList );

  var result = [];
  if(_.contains(element.classList, className)) {
    result.push(element);
  }

  _.each(element.childNodes, function(thisNode) {
    result = result.concat(getElementsByClassName(className, thisNode));
  })

  return result;
};
