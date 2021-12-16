function commonElements(a1, a2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < a1.length && j < a2.length) {
    if (a1[i] === a2[j]) {
      result.push(a1[i]);
    } else if (a1[i] < a2[j]) {
      i++;
    } else {
      // This means a1[i] > a2[j]
      j++;
    }
  }
  return arr;
}

//   console.log(commonElements([1, 2, 3, 5], [1, 3, 7]))
