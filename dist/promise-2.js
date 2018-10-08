import _regeneratorRuntime from 'babel-runtime/regenerator';
import _Promise from 'babel-runtime/core-js/promise';
function getFoo() {
  return new _Promise(function (resolve, reject) {
    resolve('foo');
  });
}

var g = /*#__PURE__*/_regeneratorRuntime.mark(function g() {
  var foo;
  return _regeneratorRuntime.wrap(function g$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return getFoo();

        case 3:
          foo = _context.sent;

          console.log(foo);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context['catch'](0);

          console.log(_context.t0);

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, g, this, [[0, 7]]);
});

function run(generator) {
  var it = generator();

  function go(result) {
    if (result.done) return result.value;

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error));
    });
  }

  go(it.next());
}

run(g);

export default {};