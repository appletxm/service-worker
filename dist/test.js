function letBtoGetDelivery() {
  console.info('让B去前台拿快递');

  setTimeout(function () {
    getDelievery(putDeliveryToDeskC);
  }, 2000);
}

function getDelievery(cb, failCb) {
  console.info('B去前台拿到快递');
  cb();
}

function putDeliveryToDeskC() {
  console.info('把快递放到C的桌面，并留纸条让C作检查');
  letCcheckDelivery();
}

function letCcheckDelivery() {
  console.info('C开始检查物品');
  setTimeout(function () {
    checkDelivery(putDeliveryToBoss);
  }, 5000);
}

function checkDelivery(cb) {
  console.info('C检查快递');
  cb();
}

function putDeliveryToBoss() {
  console.info('再把物品拿给Boss');
}

letBtoGetDelivery();

export default {};