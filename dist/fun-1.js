function Foo() {
  getName = function getName() {
    alert(1);
  };
  return this;
}

Foo.getName = function () {
  alert(2);
};
Foo.prototype.getName = function () {
  alert(3);
};
var getName = function getName() {
  alert(4);
};
function getName() {
  alert(5);
}