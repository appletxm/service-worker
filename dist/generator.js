import _Promise from 'babel-runtime/core-js/promise';
import _regeneratorRuntime from 'babel-runtime/regenerator';

var _marked = /*#__PURE__*/_regeneratorRuntime.mark(helloWorldGenerator),
    _marked2 = /*#__PURE__*/_regeneratorRuntime.mark(foo),
    _marked3 = /*#__PURE__*/_regeneratorRuntime.mark(gen);

function helloWorldGenerator() {
  return _regeneratorRuntime.wrap(function helloWorldGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.info('@@@@@@@@@@');

          _context.next = 3;
          return 'hello';

        case 3:
          _context.next = 5;
          return 'world';

        case 5:
          _context.next = 7;
          return 'purple';

        case 7:
          return _context.abrupt('return', 'ending');

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

var hw = helloWorldGenerator();
console.info('######gen1', hw.next());
console.info('######gen1', hw.next());
console.info('######gen1', hw.next());
console.info('######gen1', hw.next());

function foo(x) {
  var y, z;
  return _regeneratorRuntime.wrap(function foo$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return x + 1;

        case 2:
          _context2.t0 = _context2.sent;
          y = 2 * _context2.t0;
          _context2.next = 6;
          return y / 3;

        case 6:
          z = _context2.sent;
          return _context2.abrupt('return', x + y + z);

        case 8:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function time1(arg) {
  return new _Promise(function (resolve) {
    setTimeout(function () {
      resolve(arg);
    }, 2000);
  });
}

function time2(arg) {
  return new _Promise(function (resolve) {
    setTimeout(function () {
      resolve(8 + arg);
    }, 5000);
  });
}

function gen(arg) {
  var step1;
  return _regeneratorRuntime.wrap(function gen$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return time1(arg);

        case 2:
          step1 = _context3.sent;
          _context3.next = 5;
          return time2(step1);

        case 5:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this);
}
var gen66 = gen(9);
gen66.next().value.then(function (res) {
  console.info('######gen66', res);
  return gen66.next(res).value;
}).then(function (res) {
  console.info('######gen66', res);
});

export default {};