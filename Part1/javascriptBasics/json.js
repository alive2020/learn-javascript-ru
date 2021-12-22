let user = {
  name: 'Василий Иванович',
  age: 35,
};

let format = JSON.stringify(user);
console.log(format);

let unformat = JSON.parse(format);
console.log(unformat);

//////////////////////////////////////
let room = {
  number: 23,
};

let meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    /* ваш код */
    return key != '' && value == meetup ? undefined : value;
  })
);

/* в результате должно быть:
  {
    "title":"Совещание",
    "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
    "place":{"number":23}
  }
  */
