function makeCounter() {
  let count = 0;
  // ... ваш код ...
  function innerCounter() {
    return count++;
  }
  innerCounter.set = (value) => (count = value);
  innerCounter.decrease = () => count--;

  return innerCounter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
counter.set(10); // установить новое значение счётчика
console.log(counter()); // 10
counter.decrease(); // уменьшить значение счётчика на 1
console.log(counter()); // 10 (вместо 11)

//////////////////////
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

alert(sum(1)(2)); // 3
alert(sum(5)(-1)(2)); // 6
alert(sum(6)(-1)(-2)(-3)); // 0
alert(sum(0)(1)(2)(3)(4)(5)); // 15
