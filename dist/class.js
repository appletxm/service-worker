function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  console.info("Hi " + this.name);
};