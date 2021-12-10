let jsOfficialName = prompt('Какое «официальное» название JavaScript?', '');
if (jsOfficialName === 'ECMAScript') {
  alert('Верно!');
} else {
  alert('Не знаете? ECMAScript!');
}

let num = prompt('Напишите число!', '');
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}

let a = prompt('Enter a number?', '');
let b = prompt('Enter a number?', '');
alert(+a + +b < 4 ? 'Small' : 'Big');

let result = (a + b < 4) ? 'Small' : 'Big';

let login = prompt('Input your login!', '');

alert(
  login == 'Сотрудник'
    ? 'Привет'
    : login == 'Директор'
    ? 'Здравствуйте'
    : login == ''
    ? 'Нет логина'
    : ''
);

let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' : '' ;

