import _Array$from from 'babel-runtime/core-js/array/from';
import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _regeneratorRuntime from 'babel-runtime/regenerator';
var go = /*#__PURE__*/_regeneratorRuntime.mark(function go() {
  return _regeneratorRuntime.wrap(function go$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return 1;

        case 2:
          _context.next = 4;
          return 2;

        case 4:
          _context.next = 6;
          return 3;

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, go, this);
});

var arr = [].concat(_toConsumableArray(go()));

var obj = { '1': 123, '2': 666, length: 3 };

var arr2 = _Array$from(obj, function (x) {
  return x + 3;
});

console.info('==spreed=1=', arr2);

// console.info('==spreed==', arr)

export default {};