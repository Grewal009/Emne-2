/* function y() {
  var a = 100;
  function z() {
    console.log(a);
  }
  return z;
}
var closure = y();
closure();
 */

// setTimeout() callback function forms a closure
for (var i = 1; i <= 5; i++) {
  function a(x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  }
  a(i);
}
