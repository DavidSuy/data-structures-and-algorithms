function miniMaxSum(arr) {
  // declare min and max
  let min = arr[0];
  let max = arr[0];
  // declare minSum and MaxSum
  let minSum = 0;
  let maxSum = 0;

  // loop through arr
  for (const num of arr) {
    // find min and max
    if (num < min) {
      min = num;
    } else if (num > max) {
      max = num;
    }
  }
  // loop through arr and sum all num - min
  for (const num of arr) {
    if (num !== max) {
      minSum += num;
    }
  }
  // loop through arr and sum all num - max
  for (const num of arr) {
    if (num !== min) {
      maxSum += num;
    }
  }
  // print both minSum and maxSum with a space in the middle
  // console.log(minSum, maxSum);
  return `${minSum} ${maxSum}`;
}

module.exports = miniMaxSum;
