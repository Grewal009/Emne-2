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
