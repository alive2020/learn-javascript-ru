let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

//////////////////////////////
let days = {
  0: 'ВС',
  1: 'ПН',
  2: 'ВТ',
  3: 'СР',
  4: 'ЧТ',
  5: 'ПТ',
  6: 'СБ',
};

let date = new Date(2014, 0, 3); // 3 января 2012 года
function getWeekDay(date) {
  let day = date.getDay();
  let den = '';
  for (let [d, name] of Object.entries(days)) {
    if (+d === day) {
      den = name;
    }
  }
  return den;
  let dayss = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return dayss[date.getDay()];
}
console.log(getWeekDay(date)); // нужно вывести "ВТ"

/////////////////////////////////////////////////////////
let date = new Date(2021, 11, 12); // 3 января 2012 года
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}
console.log(getLocalDay(date)); // вторник, нужно показать 2

///////////////////////////////////////////////////////
let date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
  //   date.setDate(date.getDate() - days);
  //   return date.getDate();
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}
console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

////////////////////////////////////////
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

//////////////////////////////////////////////////

function getSecondsToday() {
  let now = new Date();
  // создаём объект с текущими днём/месяцем/годом
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today; // разница в миллисекундах
  return Math.round(diff / 1000); // получаем секунды
}

// function getSecondsToday() {
//     let d = new Date();
//     return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
//   }

console.log(getSecondsToday());

//////////////////////////////////////////////////

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let differ = tomorrow - now;
  return Math.round(differ / 1000);
}

console.log(getSecondsToTomorrow());

/////////////////////////////////////////////////////
function formatDate(date) {
  let diff = new Date() - date;
  if (diff < 1000) {
    return 'прямо сейчас';
  }

  let sec = Math.floor(diff / 1000);
  if (sec < 60) {
    return sec + 'сек. назад';
  }
  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return min + 'мин. назад';
  }

  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes(),
  ].map((component) => component.slice(-2)); // взять последние 2 цифры из каждой компоненты
  console.log(d);
  // соединить компоненты в дату
  return d.slice(0, 3).join('.') + ', ' + d.slice(3).join(':');
}

console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
