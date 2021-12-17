function unique(arr) {
  /* ваш код */
  //   return new Set(arr);
  return Array.from(new Set(arr));
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values)); // Hare,Krishna,:-O

/////////////////////////////////////
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  let map = new Map();
  for (let word of arr) {
    let sorted = word.toLowerCase().split('').sort().join('');
    map.set(sorted, word);
  }
  return Array.from(map.values());

  //   let obj = {};

  //   for (let i = 0; i < arr.length; i++) {
  //     let sorted = arr[i].toLowerCase().split("").sort().join("");
  //     obj[sorted] = arr[i];
  //   }

  //   return Object.values(obj);
}

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

////////////////////////////////////////
let map = new Map();

map.set('name', 'John');

let keys = Array.from(map.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more');
console.log(keys);
