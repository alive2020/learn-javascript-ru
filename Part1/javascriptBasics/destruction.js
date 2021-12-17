let user = {
  name: 'John',
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

//////////////////////////////
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(sals) {
  let highsal = 0;
  let name = null;
  for (let [person, sal] of Object.entries(salaries)) {
    if (highsal < sal) {
      highsal = sal;
      name = person;
    }
  }
  return name;
}

console.log(topSalary(salaries));
