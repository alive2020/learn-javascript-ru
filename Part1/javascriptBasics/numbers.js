let a = +prompt('a?', 0);
let b = +prompt('b?', 0);
alert(a + b);

//
alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3 but we need 6.4

alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

function readNumber() {
  let num;
  do {
    num = prompt('enter a number?', '');
  } while (!isFinite(num));
  if (num === null || num === '') return null;

  return +num;
}

alert(readNumber());

//////////////////////////////////
// Если мы умножим случайное число от 0…1 на max-min, тогда интервал возможных значений от 0..1 увеличивается до 0..max-min.
// И, если мы прибавим min, то интервал станет от min до max.

function random(min, max) {
  return Math.random() * (max - min) + min;
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // 5
