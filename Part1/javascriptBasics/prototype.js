let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.pen);
console.log(bed.glasses);
// console.log(head.glasses);

//////////////////////////////////////////////
let hamster = {
  stomach: [],
  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// Этот хомяк нашёл еду
speedy.eat('apple');
speedy.eat('pine');
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
lazy.eat('corn');
console.log(lazy.stomach); // apple

////////////////////////////////
function Obj(name) {
  this.name = name;
}
let obj = new Obj('John');

let obj2 = new obj.constructor('Pete');
console.log(obj.name);
console.log(obj2.name);

//////////////////////////////////////
// function f() {
//   console.log('Hello!');
// }
// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };

// f.defer(1000); // выведет "Hello!" через 1 секунду
/////////////////////////////////////////////
Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};
function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

////////////////////////////////////////////////
let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = 'Apple';
dictionary.__proto__ = 'test'; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
