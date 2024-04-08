/* 
Higher Order Function
Functions that take another function as an argument or return a function from it is known as Higher Order Function.

 */

function x() {
  console.log("function x");
}

function y(x) {
  x();
}

y(x);

/* 
In the above example function y() is a Higher Order Function and function x() is a Callback function.
 */

//code to find area, circumference and diameter of a circle.

let radius = [2, 4, 6, 10];

const area = function (r) {
  return Math.PI * r * r;
};
const circumference = function (r) {
  return 2 * Math.PI * r;
};

const diameter = function (r) {
  return 2 * r;
};

const calculate = function (logic, radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log("area of circle : ", calculate(area, radius));
console.log("circumference of circle : ", calculate(circumference, radius));
console.log("diameter of circle : ", calculate(diameter, radius));
