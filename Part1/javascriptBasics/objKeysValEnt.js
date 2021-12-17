let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(sals) {
  let sum = 0;
  for (let sal of Object.values(sals)) {
    sum += sal;
  }
  return sum;
}

// console.log(sumSalaries(salaries)); // 650

//////////////////////////////////////////
let user = {
  name: 'John',
  age: 30,
};

function count(user) {
  return Object.keys(user).length;
}
console.log(count(user)); // 2
