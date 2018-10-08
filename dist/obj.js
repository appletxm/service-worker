import _Reflect$ownKeys from 'babel-runtime/core-js/reflect/own-keys';
import _Object$getOwnPropertySymbols from 'babel-runtime/core-js/object/get-own-property-symbols';
import _Object$getOwnPropertyNames from 'babel-runtime/core-js/object/get-own-property-names';
import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Object$getOwnPropertyDescriptors from 'babel-runtime/core-js/object/get-own-property-descriptors';
import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Symbol from 'babel-runtime/core-js/symbol';

var _obj;

var attr = 'my-attr';
var sym = _Symbol('symbol attr');
var obj = (_obj = {
  a: 1,
  b: 2,
  c: function c() {
    console.info('i\'m text');
  }
}, _defineProperty(_obj, attr, function () {
  console.info('customer fn name');
}), _defineProperty(_obj, sym, function () {
  console.info('symbol attr fn');
}), _obj);
var a = obj.a,
    b = obj.b;


Object.defineProperty(obj, 'unenumerable', { value: 3, enumerable: false, writable: true, configurable: true });

console.info('obj====', a, b, obj[attr], obj[sym], _Object$getOwnPropertyDescriptors(obj), _Object$keys(obj), _Object$getOwnPropertyNames(obj), _Object$getOwnPropertySymbols(obj));
console.info('obj======', _Reflect$ownKeys(obj));
export default obj;