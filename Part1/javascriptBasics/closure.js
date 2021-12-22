function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2)); // = 3
console.log(sum(5)(-1)); // = 4

//////////////////////////////////////////
/* .. ваш код для inBetween и inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  };
}
console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

/////////////////////////////////////////////////////////
let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];

function byField(field) {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
}

console.log(users.sort(byField('name')));
users.forEach((user) => console.log(user.name)); // Ann, John, Pete

console.log(users.sort(byField('age')));
users.forEach((user) => console.log(user.name)); // Pete, Ann, John

///////////////////////////////////////////////////
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      // функция shooter
      console.log(i); // должна выводить порядковый номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
