import _Promise from 'babel-runtime/core-js/promise';
function letBtoGetDelivery() {
  console.info('让B去前台拿快递');
  return new _Promise(function (resove) {
    setTimeout(function () {
      getDelievery();
      resove(true);
    }, 2000);
  });
}

function getDelievery() {
  console.info('B去前台拿到快递');
}
function putDeliveryToDeskC() {
  console.info('把快递放到C的桌面，并留纸条让C作检查');
}
function letCcheckDelivery() {
  console.info('C开始检查物品');
  return new _Promise(function (resolve) {
    setTimeout(function () {
      checkDelivery();
      resolve(true);
    }, 5000);
  });
}

function checkDelivery() {
  console.info('C检查快递');
}

function putDeliveryToBoss() {
  console.info('再把物品拿给Boss');
}

letBtoGetDelivery().then(function () {
  putDeliveryToDeskC();
  return letCcheckDelivery();
}).then(function () {
  putDeliveryToBoss();
});

export default {};