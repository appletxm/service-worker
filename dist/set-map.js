import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
import _getIterator from 'babel-runtime/core-js/get-iterator';
import _Object$create from 'babel-runtime/core-js/object/create';
import _Map from 'babel-runtime/core-js/map';
import _Set from 'babel-runtime/core-js/set';
var s = new _Set([1, 2, 9, 3, 4, 5, 6, 9]);

var myMap = new _Map().set('yes', true).set('no', false);

function strMapToObj(strMap) {
  var obj = _Object$create(null);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(strMap), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      console.info('@@@', item);

      var _item = _slicedToArray(item, 2),
          k = _item[0],
          v = _item[1];

      obj[k] = v;
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

  return obj;
}

console.info('===set-map:', s);
console.info('=====map:', myMap);
var mapObj = strMapToObj(myMap);

export default {};