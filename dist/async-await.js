import _regeneratorRuntime from 'babel-runtime/regenerator';
import _Promise from 'babel-runtime/core-js/promise';

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(myGen);

function time1() {
  return new _Promise(function (resolve) {
    setTimeout(function () {
      resolve(5);
    }, 2000);
  });
}

function time2() {
  return new _Promise(function (resolve) {
    setTimeout(function () {
      resolve(8);
    }, 2000);
  });
}

// async function getData(){
//   let data1 = await time1()
//   let data2 = await time2()

//   console.info('=======async', data1, data2)
// }

function spawn(genF) {
  return new _Promise(function (resolve, reject) {
    var gen = genF();
    var value = [];

    function step() {
      var next = void 0;

      try {
        next = gen.next();
      } catch (e) {
        return reject(e);
      }

      console.info('========', next);

      if (next.done) {
        return resolve(value);
      }

      _Promise.resolve(next.value).then(function (v) {
        console.info('========', v);
        value.push(v);
        step();
      }, function (e) {
        gen.throw(e);
      });
    }

    step();
  });
}

function myGen() {
  var data1, data2;
  return _regeneratorRuntime.wrap(function myGen$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return time1();

        case 2:
          data1 = _context.sent;
          _context.next = 5;
          return time2();

        case 5:
          data2 = _context.sent;

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

// spawn(myGen).then(res => {
//   console.info('@@@@@', res)
// })


export default {};