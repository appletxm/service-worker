var a = 5;
var b = 6;

function f() {
  console.log('I am outside!');
}

(function () {
  if (false) {
    var _f = function _f() {
      console.log('I am inside!');
    };
  }
  f();
})();

export default {
  a: a, b: b
};