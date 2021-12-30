const getBtn = document.getElementById('getBtn');
const postBtn = document.getElementById('postBtn');

///////////////////////////////////
//using fetch
const getData = async () => {
  const response = await fetch('https://reqres.in/api/users');
  const users = await response.json();
  console.log('users', users.data);
  //   fetch('https://reqres.in/api/users')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((usersData) => {
  //       console.log(usersData);
  //     });

  let output = '';
  users.data.map((user) => {
    output += `
    <ul>
     <li>${user.first_name}</li>
     <li>${user.email}</li>
     </ul>
    `;
  });

  list.innerHTML = output;
  return users.data;
};

const sendData = () => {
  fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log('Errrrr', err);
    });
};

////////////////////////////////////////////////
// using axios
const getData = async () => {
  //   axios.get('https://reqres.in/api/users').then((response) => {
  //     console.log(response.data.data);
  //   });

  const response = await axios.get('https://reqres.in/api/users');
  console.log(response.data.data);
};

const sendData = async () => {
  //   axios
  //     .post('https://reqres.in/api/register', {
  //       email: 'eve.holt@reqres.in',
  //       password: 'pistol',
  //     })
  //     .then((response) => {
  //       console.log('ressss', response);
  //     });
  try {
    const response = await axios.post('https://reqres.in/api/register', {
      email: 'eve.holt@reqres.in',
      // password: 'pistol',
    });
    console.log(response);
  } catch (e) {
    console.log('errr', e);
  }
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
