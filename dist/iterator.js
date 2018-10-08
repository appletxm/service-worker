import _getIterator from 'babel-runtime/core-js/get-iterator';
import _Symbol$iterator from 'babel-runtime/core-js/symbol/iterator';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function next() {
      return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { value: undefined, done: true };
    }
  };
}
var it = makeIterator(['a', 'b']);

// console.info(it.next())
// console.info(it.next())
// console.info(it.next())

var MyIterator = function () {
  function MyIterator(start, stop) {
    _classCallCheck(this, MyIterator);

    this.start = start;
    this.stop = stop;
  }

  _createClass(MyIterator, [{
    key: _Symbol$iterator,
    value: function value() {
      console.info('========iterator', this);
      return this;
    }
  }, {
    key: 'next',
    value: function next() {
      var start = this.start;

      console.info('========next', start, this.stop);

      if (start < this.stop) {
        this.start++;
        return { value: this.start, done: false };
      }

      return { value: undefined, done: true };
    }
  }]);

  return MyIterator;
}();

function range(start, stop) {
  return new MyIterator(start, stop);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = _getIterator(range(0, 3)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var value = _step.value;

    console.log(value); // 0, 1, 2
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function Obj(value) {
  this.value = value;
  this.next = null;
}

Obj.prototype[_Symbol$iterator] = function () {
  var iterator = { next: next };

  var current = this;

  function next() {
    if (current) {
      var value = current.value;
      current = current.next;
      return { done: false, value: value };
    } else {
      return { done: true };
    }
  }
  return iterator;
};

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = _getIterator(one), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var i = _step2.value;

    console.log('@@@@@@@@@@@@', i); // 1, 2, 3
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

export default {};