function y() {
  var a = 100;
  function z() {
    console.log(a);
  }
  return z;
}
var closure = y();
closure();
