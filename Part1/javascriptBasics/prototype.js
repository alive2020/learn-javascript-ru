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
