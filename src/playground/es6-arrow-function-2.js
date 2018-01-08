// arguments object - no longer bound

const add = function (a, b) {
  // console.log(arguments);
  return a + b;
}
console.log(55, 1, 1000);  // 56

// this keyword - no longer bound

// const user = {
//   name: 'Dave',
//   cities: ['one', 'two', 'three'],
//   printPlacesLived: function () {
//       this.cities.forEach((city) => {
//         console.log(this.name + ' has lived in ' + city);
//       });
//   }
// };
// user.printPlacesLived();

// Learn about Map function.




// Challenge

const multiplier = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array where the numbers have been multiplied

  numbers: [1, 2, 3],
  multiplyBy: 2,

  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply()); // [1, 2, 3] 2  [2, 4, 6]