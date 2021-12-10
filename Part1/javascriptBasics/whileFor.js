let i = 0;
while (i < 3) {
  //   alert(i);
  i++; // without i++ cycle will be infinite with alert(0)
}


let i = 3;
while (i) alert(i--);

for (let i = 0; i < 10; i++) {
  if (i > 5 && i < 9) {
    alert(i);
  } else {
    continue;
  }
}


for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0 && i !== 0) {
      alert(i);
    } else {
      continue;
    }
  }

  
let i = 0;
while (i < 3) {
  alert(`number ${i}!`)
  i++;
}


outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Значение на координатах (${i},${j})`, '');
      // если пустая строка или Отмена, то выйти из обоих циклов
      if (!input) break outer; // (*)
      // сделать что-нибудь со значениями...
    }
  }
  alert('Готово!');


let num;
do {
  num = prompt('Input number greater 100', '');
} while (num <= 100 && num);

let n = 10;
nextPrime:
for(let i=2; i <=n; i++){
    for(let j=2; j < i; j++){
        if(i%j ==0) continue nextPrime
    }
    alert(i)
}


for (let i = 2; i <= n; i++ ) {
  if (i % 2 ) {
    alert(i);
  } else {
    continue;
  }
}
