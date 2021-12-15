//
// const, let
//

const PI = 3.14;

let index = 0;


//
// Classes
//

class Person {

  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I was born in ${this.birthYear}`);
  }
}

const p = new Person('Posti', 1985);


//
// Template literals
//

const age = 18;
const isAllowed = true;

const s = `People under ${age} are ${isAllowed ? '' : 'not '}allowed.`;


//
// Arrow functions
//

const numbers = [1, 2, 3];

const doubleNumbers = numbers.map(x => x * 2);

const addAction = () => ({ type: 'ADD' });


//
// Enhanced object properties
//

const prop1 = 'prop1'

const obj1 = {
  prop1,
  func1() {
    console.log('func1');
  }
}


//
// Spread operator
//

const number4to6  = [4, 5, 6];

const number1to6 = [1, 2, 3, ...number4to6];


const person = {
  name: 'Posti',
  birthYear: 1985,
  email: 'personal@email.com'
};

const employee = {
  ...person,
  email: 'japostigo@atsistemas.com',
  company: 'atSistemas'
};


const arrayMaxNumber = Math.max(...number1to6);


const sum = (...args) => (
  Object.values(args).reduce((res, x) => res + x, 0)
);

const arraySummatory = sum(...number1to6);


//
// Destructuring assignment
//

const numbers0to4 = [0, 1, 2, 3, 4];

const [ number0, number1, , ...numbers3to4 ] = numbers0to4;


const user = {
  id: 1,
  name: 'Posti',
  email: 'japostigo@atsistemas.com'
};

const { name, email } = user;


//
// Default values in function parameters
//

const formatNumber = (n, numDecimals = 0) => Number(n).toFixed(numDecimals);
