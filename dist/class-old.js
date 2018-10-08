function Parent(name) {
  this.name = name;
  this.goSchool = function () {
    console.info('go to school');
  };
}
Parent.prototype.sayName = function () {
  console.info(this.name);
};

function tempFn() {}
tempFn.prototype = Parent.prototype;
var temp = new tempFn();

function Child(name, age) {
  Parent.apply(this, [name]);
  this.age = age;
}
Child.prototype = temp;
var subChild = new Child('txm2');

function SecondChild(name, age) {
  Child.apply(this, [name, age]);
}
function STempFn() {}
STempFn.prototype = Child.prototype;
SecondChild.prototype = new STempFn();
var ssChild = new SecondChild('txm3', 30);