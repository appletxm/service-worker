import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';

var Greeter = function () {
  function Greeter(message) {
    _classCallCheck(this, Greeter);

    this.message = message;
  }

  _createClass(Greeter, [{
    key: 'greet',
    value: function greet() {
      var element = document.querySelector('#message');
      element.innerHTML = this.message;
    }
  }]);

  return Greeter;
}();

export { Greeter as default };