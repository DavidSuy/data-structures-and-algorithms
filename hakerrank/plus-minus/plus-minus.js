function plusMinus(arr) {
  let keys = {
    pos: 0,
    neg: 0,
    zero: 0,
  };

  // loop through the arr
  arr.map((val) => {
    // check if positive, negative, zero
    if (val === 0) {
      // add to counts
      keys.zero++;
    } else if (val > 0) {
      keys.pos++;
    } else if (val < 0) {
      keys.neg++;
    }
  });

  // loop to keys
  for (const [key, value] of Object.entries(keys)) {
    // print ratio with 6 decimal place
    console.log((value / arr.length).toFixed(6));
  }
}

module.exports = plusMinus;
