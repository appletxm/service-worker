import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _regeneratorRuntime from 'babel-runtime/regenerator';
import _Symbol$iterator from 'babel-runtime/core-js/symbol/iterator';
import _Symbol$replace from 'babel-runtime/core-js/symbol/replace';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _Symbol$isConcatSpreadable from 'babel-runtime/core-js/symbol/is-concat-spreadable';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Symbol$hasInstance from 'babel-runtime/core-js/symbol/has-instance';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _Symbol from 'babel-runtime/core-js/symbol';
var s1 = _Symbol('foo');
var s2 = _Symbol('bar');

var obj = {};
obj[s1] = '55555';

console.info('symbole obj[s1] ' + obj[s1]);

// let iframe = document.createElement('iframe')
// iframe.src = 'https://www.baidu.com'
// document.body.appendChild(iframe)

// console.info('******Symbol for:', iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo'))

var MyClass = function () {
  function MyClass() {
    _classCallCheck(this, MyClass);
  }

  _createClass(MyClass, [{
    key: _Symbol$hasInstance,
    value: function value(foo) {
      console.info('====call instanceof', foo);
      return foo instanceof Array;
    }
  }]);

  return MyClass;
}();

var symbolInternal = _defineProperty({}, _Symbol$hasInstance, function (foo) {
  console.info('====call instanceof obj', foo);
  return foo instanceof Array;
});

var myClass = new MyClass();
console.info(myClass);
console.info('====symbol instanceof:', [1, 2, 3] instanceof symbolInternal);

var arr2 = ['c', 'd'];
arr2[_Symbol$isConcatSpreadable] = false;
var arr2new = ['a', 'b'].concat(arr2, 'e');
arr2[_Symbol$isConcatSpreadable] = true;
var arr3new = ['a', 'b'].concat(arr2, 'e');

console.info('====symbol isConcatSpereadable', arr2new, arr3new);

var MyArray = function (_Array) {
  _inherits(MyArray, _Array);

  function MyArray(arg) {
    _classCallCheck(this, MyArray);

    return _possibleConstructorReturn(this, (MyArray.__proto__ || _Object$getPrototypeOf(MyArray)).call(this, arg));
  }
  // static get [Symbol.species]() { 
  //   return Array
  // }


  return MyArray;
}(Array);

var a = new MyArray(1, 2, 3);
var b = a.map(function (x) {
  return x;
});
var c = a.filter(function (x) {
  return x > 1;
});

console.info('====symbol species', a instanceof MyArray);
console.info('====symbol species', b instanceof Array);
console.info('====symbol species', c instanceof Array);

var x = {};
x[_Symbol$replace] = function () {
  for (var _len = arguments.length, s = Array(_len), _key = 0; _key < _len; _key++) {
    s[_key] = arguments[_key];
  }

  return console.log('====symbol replace', s);
};
'Hello'.replace(x, 'World'); // ["Hello", "World"]

var myIterable = {};
myIterable[_Symbol$iterator] = /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
  return _regeneratorRuntime.wrap(function _callee$(_context) {
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
  }, _callee, this);
});
var IteratorFn = function () {
  function IteratorFn(arr) {
    _classCallCheck(this, IteratorFn);

    this.arr = arr;
  }

  _createClass(IteratorFn, [{
    key: _Symbol$iterator,
    value: /*#__PURE__*/_regeneratorRuntime.mark(function value() {
      var i;
      return _regeneratorRuntime.wrap(function value$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.info('@@@@@@@@@@@@');
              i = 0;

            case 2:
              if (!(i < this.arr.length)) {
                _context2.next = 8;
                break;
              }

              _context2.next = 5;
              return i;

            case 5:
              i++;
              _context2.next = 2;
              break;

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, value, this);
    })
  }]);

  return IteratorFn;
}();
var iteratorMe = new IteratorFn([1, 2, 3, 4, 5]);
console.log('=====symbol interator:', [].concat(_toConsumableArray(iteratorMe)));
console.log('====symbol iterator', [].concat(_toConsumableArray(myIterable)));

export default obj;