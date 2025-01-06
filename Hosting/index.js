
// Variable hoisting
console.log(a); // undefined (only declaration is hoisted)
var a = 10;

// Function hoisting
greet(); // "Hello"
function greet() {
  console.log("Hello");
}

// Function expression (not hoisted)
sayHi(); // ReferenceError: Cannot access 'sayHi' before initialization
let sayHi = function () {
  console.log("Hi");
};

