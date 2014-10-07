/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
*/

// MY SOLUTION

function zero(opFunc) {
  return opFunc ? opFunc(0) : 0;
}

function one(opFunc) {
  return opFunc ? opFunc(1) : 1;
}

function two(opFunc) {
  return opFunc ? opFunc(2) : 2;
}

function three(opFunc) {
  return opFunc ? opFunc(3) : 3;
}

function four(opFunc) {
  return opFunc ? opFunc(4) : 4;
}

function five(opFunc) {
  return opFunc ? opFunc(5) : 5;
}

function six(opFunc) {
  return opFunc ? opFunc(6) : 6;
}

function seven(opFunc) {
  return opFunc ? opFunc(7) : 7;
}

function eight(opFunc) {
  return opFunc ? opFunc(8) : 8;
}

function nine(opFunc) {
  return opFunc ? opFunc(9) : 9;
}

function plus(num) {
  function add(amount) {
    return amount + num;
  }

  return add;
}

function minus(num) {
  function subtract(amount) {
    return amount - num;
  }

  return subtract;
}

function times(num) {
  function multiply(amount) {
    return amount * num;
  }

  return multiply;
}

function dividedBy(num) {
  function divide(amount) {
    return amount / num;
  }

  return divide;
}

// FAVORITE SOLUTION I FOUND ON CODEWARS

var OPERATORS = ["plus", "minus", "times", "dividedBy"];
var NUMBERS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

var Operation = function(op, num) {
  this.op = op;
  this.num = num;
}

Operation.prototype.perform = function(num) {
  num = parseFloat(num);
  switch (this.op) {
    case "plus":
      return num + this.num;
    case "minus":
      return num - this.num;
    case "times":
      return num * this.num;
    case "dividedBy":
      return num / this.num;
  }
}

NUMBERS.forEach(function(word, num) {
  global[word] = function(op) {
    return op ? op.perform(num) : num;
  }
});

OPERATORS.forEach(function (word, _) {
  global[word] = function (num) {
    return new Operation(word, num);
  }
});

