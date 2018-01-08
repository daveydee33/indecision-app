// old style function
const square1 = function (x) {
  return x * x;
}

// or...

// old style function with a name
function square2 (x) {
  return x * x;
}


// arrow functions are always anonymous, so if we want to define it and call it later, we assign it to a variable like:
// arrow function
const squareArrow = (x) => {
  return x * x;
}

// arrow function 2 - if it's just one line, we don't need the brackets and we don't need the 'return' keyword.  more concise!
const squareArrow2 = (x) => x * x;

console.log(square1(5));
console.log(square2(5));
console.log(squareArrow(8));
console.log(squareArrow2(8));



// Challenge - use arrow functions

const fullName = "John Smith";

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// }

// one-liner
const getFirstName = (fullName) => fullName.split(' ')[0];


console.log(`first name of ${fullName} is: ` + getFirstName(fullName));