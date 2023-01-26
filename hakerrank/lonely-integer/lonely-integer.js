function lonelyinteger(a) {
  // make a new array for each unique value of the array and start in with the first int for array a
  let uniqueIntArr = [];

  // loop through the array
  for (const int of a) {
    // declare removed variable flag if something was removed
    let removed = false;

    // loop through uniqueIntArr to check if int is in uniqueIntArr
    for (let i = 0; i <= uniqueIntArr.length; i++) {
      //   // check if there's an occurrence of this integer in the uniqueIntArr, if there is then remove from array
      if (int === uniqueIntArr[i]) {
        // delete occurrence
        uniqueIntArr.splice(i, 1);
        // set remove flag to true
        removed = true;
      }
    }
    // if removed flag is false then add int to uniqueIntArr
    if (!removed) {
      uniqueIntArr.push(int);
    }
  }
  // return the last value of the uniqueIntArr
  return uniqueIntArr[0];
}

module.exports = lonelyinteger;
