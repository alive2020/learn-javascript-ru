function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    // let next = pow(x, n - 1);
    console.log(`ret: ${x}*${pow(x, n - 1)}`);
    return x * pow(x, n - 1);
  }
}

// pow(2, 4);

let company = {
  // тот же самый объект, сжатый для краткости
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {
  if (Array.isArray(department)) {
    // случай (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
  } else {
    // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      console.log(sum, subdep);
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}
console.log(sumSalaries(company)); // 6700

////////////////////////////////////
// using loop
function sumTo(n) {
  /*... ваш код ... */
  if (n === 1) return n;
  let sum = 0;
  for (let i = n; i > 0; i--) {
    //   for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
//using recursion
function sumTo(n) {
  /*... ваш код ... */
  if (n === 1) return n;
  let sum = 0;
  return (sum = n + sumTo(n - 1));
}
console.log(sumTo(4)); // 10
console.log(sumTo(100)); // 5050


//////////////////////////////////////
function factorial(n) {
  //   if (n === 1) return n;
  //   return n * factorial(n - 1);
  return n != 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // 120

//////////////////////////////////////////////
function fib(n) {
  /* ваш код */
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
  //   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13


/////////////////////////////////////////////
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}

function printList(list) {
  let tmp = list;
  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

////////////////////////
// reversed list
function printList(list) {
  if(list.next) {
      printList(list.next)
  }
  console.log(list.value)
}

/////////////////////////
//reversed list
function printList(list) {
  let arr = [];
  let tmp = list;
  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

console.log(printList(list));
