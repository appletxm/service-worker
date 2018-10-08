function doFn() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$x = _ref.x,
      x = _ref$x === undefined ? 0 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === undefined ? 0 : _ref$y;

  console.info('fns==', x, y);
  return [x, y];
}

function restFn(a, b) {
  for (var _len = arguments.length, arg = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    arg[_key - 2] = arguments[_key];
  }

  console.info('fns==', a, b, arg);
}

function throwIfMissing() {
  throw new Error('Missing parameter');
}

function foo() {
  var mustBeProvided = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : throwIfMissing();

  return mustBeProvided;
}

export default {
  doFn: doFn,
  restFn: restFn,
  foo: foo
};