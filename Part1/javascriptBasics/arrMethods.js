function camelize(str) {
  return str
    .split('-')
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
}

console.log(camelize('background-color')); // == 'backgroundColor';
console.log(camelize('list-style-image')); //== 'listStyleImage';
console.log(camelize('-webkit-transition')); //== 'WebkitTransition';

let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}
let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1 (совпадающие значения)
alert(arr); // 5,3,8,1 (без изменений)

let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
alert(arr); // [3, 1]

//////////////////////////////////////////
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
... ваш код для сортировки по убыванию
alert(arr); // 8, 5, 2, 1, -10

///////////////////////////////////////////
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log('init', arr); // HTML, JavaScript, CSS (без изменений)

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
    '/': (a, b) => a / b,
    '**': (a, b) => a ** b,
  };

  this.calculate = function (str) {
    let nums = str.split(' ');
    let a = +nums[0];
    let op = nums[1];
    let b = +nums[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
let calc = new Calculator();
console.log(calc.calculate('3 + 7'));

let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log(result); // 8

/////////////////////////////////////////////

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

let names = [vasya.name, petya.name, masha.name];
let names = users.map((item) => item.name);
console.log(names); // Вася, Петя, Маша

///////////////////////////////////////////
let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((item) => {
  return {
    fullName: `${item.name} ${item.surname}`,
    id: item.id,
  };
});
console.log(usersMapped);

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // Вася Пупкин

////////////////////////////////////////

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let arr = [vasya, petya, masha];
sortByAge(arr);
function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

////////////////////////////////////
let arr = [1, 2, 3];
function shuffle(array) {
  //   console.log(Math.random() - 0, 0.5);
  array.sort(() => Math.random() - 0.5);
}

console.log('arr', shuffle(arr));
alert(arr);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// подсчёт вероятности для всех возможных вариантов
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// показать количество всех возможных вариантов
for (let key in count) {
    alert(`${key}: ${count[key]}`);
}

///////////////////////////////////////
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];
function getAverageAge(users) {
  //   let res = 0;
  //   arr.map((item) => {
  //     res += item.age;
  //   });
  //   res = res / arr.length;
  //   return res;
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

function unique(arr) {
  /* ваш код */
  let res = [];
  for (let str of arr) {
    if (!res.includes(str)) {
      res.push(str);
    }
  }
  return res;
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

console.log(unique(strings)); // кришна, харе, :-O
