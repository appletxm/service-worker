import _Object$keys from 'babel-runtime/core-js/object/keys';
import _getIterator from 'babel-runtime/core-js/get-iterator';
import _Object$create from 'babel-runtime/core-js/object/create';
import _Reflect$set from 'babel-runtime/core-js/reflect/set';
import _Reflect$get from 'babel-runtime/core-js/reflect/get';

var obj = new Proxy({}, {
  get: function get(target, key, receiver) {
    console.log('getting ' + key + '!', target, key, receiver);
    return _Reflect$get(target, key, receiver);
  },
  set: function set(target, key, value, receiver) {
    console.log('setting ' + key + '!', target, key, value, receiver);
    return _Reflect$set(target, key, value, receiver);
  }
});

obj.a = 78;
console.info('====proxy:', obj.a);

var obj2 = { a: 123, b: 456 };
var proxy2 = new Proxy(obj2, {
  get: function get(target, key, receiver) {
    console.info('======get proxy2:', key, target, receiver, this);
    return target[key];
  },
  set: function set(target, key, value, receiver) {
    console.info('======set proxy2:', key, target);
    target[key] = value;
    return true;
  }
});

proxy2.a = 500;
console.info('======proxy2:', proxy2.a);

var handler = {
  get: function get(target, name) {
    console.info('======proxy3 get:', target, this);
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function apply(target, thisBinding, args) {
    console.info('======proxy3 apply:', target, this, thisBinding);
    return args[0];
  },

  construct: function construct(target, args) {
    console.info('======proxy3 construct:', target, this);
    return { value: args[1] };
  }
};

var fproxy = new Proxy(function (x, y) {
  return x + y;
}, handler);

fproxy(1, 2); // 1
new fproxy(1, 2); // {value: 2}
fproxy.prototype === Object.prototype; // true
fproxy.foo === "Hello, foo"; // true


var proto = new Proxy({ a: 2, b: 3 }, {
  get: function get(target, propertyKey, receiver) {
    console.log('GET ' + propertyKey);
    return target[propertyKey];
  }
});

var obj3 = _Object$create(proto);
console.info('======proxy4:', obj3.a);

var fnList = {
  double: function double(n) {
    return n * 2;
  },
  pow: function pow(n) {
    return n * n;
  },
  reverseInt: function reverseInt(n) {
    return n.toString().split("").reverse().join("") | 0;
  }
};
var pipe = function () {
  return function (value) {
    var funcStack = [];
    var oproxy = new Proxy({}, {
      get: function get(pipeObject, fnName) {
        if (fnName === 'get') {
          return funcStack.reduce(function (val, fn) {
            return fnList[fn](val);
          }, value);
        } else {
          funcStack.push(fnName);
        }

        return oproxy;
      }
    });

    return oproxy;
  };
}();

console.info('======proxy5:', pipe(3).double.pow.reverseInt.get);

var dom = new Proxy({}, {
  get: function get(target, property) {
    return function () {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var el = document.createElement(property);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _getIterator(_Object$keys(attrs)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var prop = _step.value;

          el.setAttribute(prop, attrs[prop]);
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

      for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        children[_key - 1] = arguments[_key];
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _getIterator(children), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var child = _step2.value;

          if (typeof child === 'string') {
            child = document.createTextNode(child);
          }
          el.appendChild(child);
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

      return el;
    };
  }
});

var el = dom.div({}, 'Hello, my name is ', dom.a({ href: '//example.com' }, 'Mark'), '. I like:', dom.ul({}, dom.li({}, 'The web'), dom.li({}, 'Food'), dom.li({}, '…actually that\'s it')));

document.body.appendChild(el);

var testObj = {
  a: '123',
  b: '556',
  foo: function foo() {
    console.info('1111');
  }
};
var target = function target() {
  return 'I am the target';
};
var handler = {
  apply: function apply(target, ctx, args) {
    console.info('======proxy6:', target, ctx, args);
    return 'I am the proxy' + ctx.a + ctx.b;
  }
};

var p = new Proxy(target, handler);
console.info('======proxy6:', p.call(testObj, 1, 2, 3, 5));

var p = new Proxy(function () {}, {
  construct: function construct(target, args) {
    console.log('called: ' + args.join(', '), target, args);
    return { value: args[0] * 10 };
  }
});
console.info('======proxy7:', new p(1));

var target8 = {
  m: function m() {
    return this === proxy8;
  }
};
var handler8 = {};
var proxy8 = new Proxy(target8, handler8);
console.info('======proxy8:', target8.m()); // false
console.info('======proxy8:', proxy8.m()); // true

export default {};