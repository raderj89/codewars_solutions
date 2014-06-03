/*
Description:

Complete the squareSum method so that it squares each number passed into it and then sums the results together.

For example:

squareSum([1,2, 2]) # should return 9
*/

function forEach(array, action) {  
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
};

function map(array, func) {
  var result = [];

  forEach(array, function(el) {
    result.push(func(el))
  });

  return result;
};

function squareSum(numbers){
  var sum = 0;
  
  var mapped = map(numbers, function(el) {
      return el = el * el;
  });

  forEach(mapped, function(el) {
    sum = sum + el;
  });
  
  return sum;
}