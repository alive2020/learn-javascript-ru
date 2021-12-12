let age = prompt('age', '');

function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

function min(a, b) {
     if(a > b) return b
     return a
}

function min(a, b) {
  return a < b ? a : b;
}
alert(min(2, 5));
alert(min(2, -1));

function power(a, b) {
    // return a ** b
 let res = a;
 for(let i = 1; i < b; i++){
     res *= a
 }
 return res;
}
alert(power(3, 4));
alert(power(3, 2));

let ask= (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
  }

  ask(
    "Вы согласны?",
    () =>  alert("Вы согласились."),
    () =>  alert("Вы отменили выполнение.")
 )


