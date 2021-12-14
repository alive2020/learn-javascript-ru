function User(name) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;

  // return this;  (неявно)
}

let user = new User('Вася');

// alert(user.name); // Вася
/////////////////////////////////
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}
// let a = new A();
// let b = new B();

// alert(a == b); // true

////////////////////////

function Calculator() {
  this.read = function () {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
// calculator.read();
// alert('Sum=' + calculator.sum());
// alert('Mul=' + calculator.mul());

///////////////////////////////////

function Accumulator(startValue) {
  this.value = startValue;
  this.read = function () {
    this.value += +prompt('new number?', 0);
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
