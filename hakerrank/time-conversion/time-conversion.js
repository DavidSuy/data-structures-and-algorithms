function timeConversion(s) {
  // separate the string by : and store it in a variable called timeArr
  let timeArr = s.split(":");

  // check if timeArr[0] is greater than 12
  if (timeArr[0] > 12) {
    // if so add 12 to timeArr[0]
    timeArr[0] + 12;
  }

  // splice the only the first two chars in arr[2]
  // console.log(typeof timeArr[2]);
  timeArr[2].splice(2, timeArr[2].length);
  // timeArr[2] = timeArr[2].split(0, 2);
  console.log(timeArr);
  // join timeArr
  // return timeArr
}

let testTime = "07:05:45PM";

timeConversion(testTime);
