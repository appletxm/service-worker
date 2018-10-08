import _Reflect$has from 'babel-runtime/core-js/reflect/has';
import _Reflect$deleteProperty from 'babel-runtime/core-js/reflect/delete-property';
import _Reflect$get from 'babel-runtime/core-js/reflect/get';
var obj = { a: 555 };
var loggedObj = new Proxy(obj, {
  get: function get(target, name) {
    console.log('get', target, name);
    return _Reflect$get(target, name);
  },
  deleteProperty: function deleteProperty(target, name) {
    console.log('delete' + name);
    return _Reflect$deleteProperty(target, name);
  },
  has: function has(target, name) {
    console.log('has' + name);
    return _Reflect$has(target, name);
  }
});

loggedObj.a;
'a' in loggedObj;
loggedObj.hasOwnProperty('a');

// let p = {
//   a: 'a'
// };
// let handler = {
//   set(target, key, value, receiver) {
//     console.log('relect=====set');
//     Reflect.set(target, key, value, receiver)
//   },
//   defineProperty(target, key, attribute) {
//     console.log('relect=====defineProperty');
//     Reflect.defineProperty(target, key, attribute);
//   }
// };

// let obj4 = new Proxy(p, handler);
// obj4.a = 'A'

export default {};