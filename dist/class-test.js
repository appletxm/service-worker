import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

var MyClass = function () {
  function MyClass(name) {
    _classCallCheck(this, MyClass);

    this.name = name;
  }

  _createClass(MyClass, [{
    key: 'printName',
    value: function printName() {
      console.info('name is:', this.name);
    }
  }]);

  return MyClass;
}();

var SubClass = function (_MyClass) {
  _inherits(SubClass, _MyClass);

  function SubClass(name) {
    _classCallCheck(this, SubClass);

    return _possibleConstructorReturn(this, (SubClass.__proto__ || _Object$getPrototypeOf(SubClass)).call(this, name));
  }

  return SubClass;
}(MyClass);