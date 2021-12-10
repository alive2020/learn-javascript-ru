let age = 4;
if (age >= 14 && age <= 90) {
  //   alert(`${age} is between 14 and 90`);
}

if (!(age >= 14 && age <= 90)) {
  // alert(`${age} is not between (14 and 90)` )
}

if (age < 14 || age > 90) {
  //   alert(`${age} is not between 14 and 90` )
}

// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».
// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».

let userName = prompt('Who are you?', "")
let password = "";

if( userName === "Admin"){

    password = prompt("Enter your password!", "")
    if(password === "I am the Boss") {
        alert("Hello Boss!")
    } else if(password === "" || password === null ) {
        alert("Canceled")
    } else {
        alert("Invalid Password!")
    }

} else if(userName === "" || userName === null ) {
    alert("Canceled")
} else {
    alert('I dont know you!')
}


