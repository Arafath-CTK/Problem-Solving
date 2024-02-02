// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

function zero(operation) {
  if (operation) {
    return Math.floor(operation(0));
  }
  return 0;
}

function one(operation) {
  if (operation) {
    return Math.floor(operation(1));
  }
  return 1;
}

function two(operation) {
  if (operation) {
    return Math.floor(operation(2));
  }
  return 2;
}

function three(operation) {
  if (operation) {
    return Math.floor(operation(3));
  }
  return 3;
}

function four(operation) {
  if (operation) {
    return Math.floor(operation(4));
  }
  return 4;
}

function five(operation) {
  if (operation) {
    return Math.floor(operation(5));
  }
  return 5;
}

function six(operation) {
  if (operation) {
    return Math.floor(operation(6));
  }
  return 6;
}

function seven(operation) {
  if (operation) {
    return Math.floor(operation(7));
  }
  return 7;
}

function eight(operation) {
  if (operation) {
    return Math.floor(operation(8));
  }
  return 8;
}

function nine(operation) {
  if (operation) {
    return Math.floor(operation(9));
  }
  return 9;
}

function plus(second) {
  return function (first) {
    return first + second;
  };
}
function minus(second) {
  return function (first) {
    return first - second;
  };
}
function times(second) {
  return function (first) {
    return first * second;
  };
}
function dividedBy(second) {
  return function (first) {
    return first / second;
  };
}

// Test
console.log(eight(dividedBy(three())));
console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
