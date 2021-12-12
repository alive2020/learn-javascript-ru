// let a = +prompt('Input a number', '');
// let b = +prompt('Input a number', '');

let calculator = {
  // ... ваш код ...
  getNum() {
    this.num1 = +prompt('a', 0);
    this.num2 = +prompt('b', 0);
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};

// calculator.getNum();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};

console.log(ladder.up().up().down().showStep()); // 1
