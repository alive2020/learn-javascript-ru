function delay(ms) {
  // ваш код
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

////////////////////////
//Rewrite function
// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }

//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

async function loadJson(url) {
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }
  throw new Error(response.status);
}

loadJson('no-such-user.json') // (3)
  .catch(alert); // Error: 404

/////////////////////////////
class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let user = response.json();
    return user;
  } else {
    throw new HttpError(response);
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt('Введите логин?', 'iliakan');
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
        return demoGithubUser();
      } else {
        throw err;
      }
    }
  }

  alert(`Полное имя: ${user.name}.`);
  return user;
}

demoGithubUser();

//////////////////////////////////////////
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then((result) => console.log(result));
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}

f();
