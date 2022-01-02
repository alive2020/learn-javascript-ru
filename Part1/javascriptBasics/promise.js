function delay(ms) {
  // ваш код
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
