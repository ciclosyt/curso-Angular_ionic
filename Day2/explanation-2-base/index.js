//
// const, let
//

var PI = 3.14;

var index = 0;


//
// Classes
//

function Person(name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}

Person.prototype.greet = function () {
  console.log('Hello, my name is ' + this.name + ' and I was born in ' + this.birthYear);
};

var p = new Person('Posti', 1985);


//
// Template literals
//

var age = 18;
var isAllowed = true;

var s = 'People under ' + age + ' are ' + (isAllowed ? '' : 'not ') + 'allowed.';


//
// Arrow functions
//

var numbers = [1, 2, 3];

var doubleNumbers = numbers.map(function(x) {
  return x * 2;
});

function addAction() {
  return { type: 'ADD' };
}


//
// Enhanced object properties
//

var prop1 = 'prop1'

var obj1 = {
  prop1: prop1,
  func1: function() {
    console.log('func1');
  }
}


//
// Spread operator
//

var number4to6  = [4, 5, 6];

var number1to6 = [1, 2, 3].concat(number4to6);


var person = {
  name: 'Posti',
  birthYear: 1985,
  email: 'personal@email.com'
};

var employee = Object.assign({}, person, {
  email: 'japostigo@atsistemas.com',
  company: 'atSistemas'
});


// Math.max([value1 [, valor2 [, value 3 [, ...]]]])

var maxNumber = Math.max(1, 2, 3);

var arrayMaxNumber = Math.max.apply(null, number1to6);


function sum() {
  // console.log(arguments);
  return Object.values(arguments).reduce(function (res, x) {
    return res + x
  }, 0);
}

var summatory = sum(1, 2, 3);

var arraySummatory = sum.apply(null, number1to6);



//
// Destructuring assignment
//

var numbers0to4 = [0, 1, 2, 3, 4];

var number0 = numbers0to4[0];
var number1 = numbers0to4[1];
var numbers3to4 = numbers0to4.slice(3);


var user = {
  id: 1,
  name: 'Posti',
  email: 'japostigo@atsistemas.com'
};

var name = user.name;
var email = user.email;


//
// Default values in function parameters
//

function formatNumber(n, numDecimals) {

  if (numDecimals === undefined) {
    numDecimals = 0;
  }

  return Number(n).toFixed(numDecimals);
}
