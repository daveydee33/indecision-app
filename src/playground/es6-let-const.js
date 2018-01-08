// using var
var varName = "Aaa";
var varName = "Bbb"; // I can do this with var
console.log("var: ", varName);

// var can allow us to re-define a variable again.. not good.



// using let
let letName = "Ccc";
//let letName = "Ddd"; // I can't do this with let or const
letName = "Ddd";
console.log("let: ", letName);


// with let, I can re-assign a variable but NOT re-define it.



// using const
const constName = "Eee"
// constName = "Fff"; // can't do this.
console.log("const: ", constName);






/////////  SCOPING
// let and const have block level scoping.

