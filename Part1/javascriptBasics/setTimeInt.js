function printNumbers(from, to) {
  setTimeout(function go() {
    console.log(from);
    if (from < to) {
      setTimeout(go, 1000);
    }
    from++;
  }, 1000);
}

function printNumbers(from, to) {
  let timerId = setInterval(function () {
    console.log(from);

    if (from === to) {
      clearInterval(timerId);
    }
    from++;
  }, 1000);
}

console.log(printNumbers(1, 5));
