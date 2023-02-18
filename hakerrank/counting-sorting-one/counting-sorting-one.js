function countingSort(arr, max = 100) {
  // possible integer arr
  arr;
  let possArr = [];
  let min = 0;

  // loop trough possible range and push to possArr
  for (let i = min; i < max; i++) {
    possArr.push(0);
  }

  // loop through arr

  arr.forEach((el) => {
    // for each int increment that value in posArr
    possArr[el] += 1;
  });

  // return possArr
  return possArr;
}

module.exports = countingSort;
