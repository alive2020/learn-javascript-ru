const user = {};
user.name = 'Jhon';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// console.log(user);
////////////////////////////
let schedule = {
  //   name: 'jjj',
};
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// console.log(isEmpty(schedule));
///////////////////////////////////////
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
function sumSalaries(salaries) {
  for (let sal in salaries) {
    sum += salaries[sal];
  }
  return sum;
}

// console.log(sumSalaries(salaries));
////////////////////////////////////////////

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === 'number') {
      menu[key] *= 2;
    }
  }
  return menu;
}

console.log(multiplyNumeric(menu));

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };
