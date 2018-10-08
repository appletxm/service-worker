import _Promise from 'babel-runtime/core-js/promise';
var b = 0;
var promise = new _Promise(function (resolve) {
  var b = 2;
  console.info(b);
  resolve('A');
});

promise.then(function (data) {
  console.info(2);
  return 'B';
}).then(function (data) {
  console.info(data);
}).then(function (data) {
  console.info(b, data);
});

promise.then(function () {
  console.info('3');
});