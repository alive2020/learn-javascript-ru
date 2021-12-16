function ucFirst(name) {
  if (!name) return name;
  return name[0].toUpperCase() + name.slice(1);
}
alert(ucFirst('вася'));

//////////////////////////////////////////////
function checkSpam(str) {
  let low = str.toLowerCase();
  if (low.includes('viagra') || low.includes('xxx')) {
    return true;
  }
  return false;
}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam('innocent rabbit'));

////////////////////////////////////////////////
function truncate(str, len) {
  let newStr = '';
  if (str.length === len || str.length < len) return str;
  if (str.length > len) {
    newStr = str.substr(0, len - 1) + '...';
  }
  return newStr;
}

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }

alert(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
alert(truncate('Всем привет!', 20));


////////////////////////////////////////////
function extractCurrencyValue(val) {
  return +val.slice(1);
}

// alert(extractCurrencyValue('$120'));


