async function loadUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return users;
}

document.addEventListener('DOMContentLoaded', async () => {
  let users = [];

  try {
    users = await loadUsers();
  } catch (e) {
    console.log('Error!', e);
  }

  let output = '';
  users.map((user) => {
    output += `<ul>
      <li>
      ID: ${user.id}
      </li>
      <li>
      Name: ${user.name}
      </li>
      <li>
      Email: ${user.email}
      </li>
      </ul>`;
  });

  document.querySelector('.list').innerHTML = output;
  //   console.log(users);
});

setTimeout(() => {
  console.log('Start');
}, 1000);

console.log('End');
