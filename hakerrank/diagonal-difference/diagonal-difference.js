function diagonalDifference(arr) {
  // Declare n
  let n = arr.length;
  // Declare sumOne and sumTwo
  let sumOne = 0;
  let sumTwo = 0;
  // loop through arr
  for (let i = 0; i < n; i++) {
    // Get diagonal from left to right
    // add arr[i] to sumOne
    sumOne += arr[i][i];
    // Get diagonal from right to left
    // add arr[n - 1 - i] to sum two
    sumTwo += arr[i][n - 1 - i];
  }
  // Calculate absolute difference between sumOne and sumTwo
  return Math.abs(sumOne - sumTwo);
}

module.exports = diagonalDifference;
