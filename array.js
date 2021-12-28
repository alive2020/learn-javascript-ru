let styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor((styles.length - 1) / 2)] = 'Classic';
styles.shift();
// alert(styles);
styles.unshift('Rap', 'Reggi');
// alert(styles);

/////////////////////

function sumInput() {
  let arr = [];
  while (true) {
    // let num = prompt('enter a number', '');
    if (num === null || num === '' || !isFinite(num)) break;
    arr.push(+num);
  }
  let sum = 0;
  for (let n of arr) {
    sum += n;
  }
  return sum;
}

// alert(sumInput());

function getMaxSubSum(arr) {
  let sum = 0;
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
    maxSum = Math.max(maxSum, sum); 
    if (sum < 0) sum = 0; 
  }

  return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
