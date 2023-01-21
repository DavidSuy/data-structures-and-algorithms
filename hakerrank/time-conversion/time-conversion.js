function timeConversion(s) {
  // separate the string by : and store it in a variable called timeArr
  let timeArr = s.split(":");

  console.log(timeArr[2].substr(2, 4));

  // check if time is AM or PM
  if (timeArr[2].substr(2, 4) === "PM") {
    console.log("we in it");
    // if so add 12 to timeArr[0]
    timeArr[0] + 12;
  }

  // Only the first two chars in arr[2]
  // console.log(typeof timeArr[2]);
  timeArr[2] = timeArr[2].substr(0, 2);

  // timeArr[2] = timeArr[2].split(0, 2);
  console.log(timeArr);
  // join timeArr
  // return timeArr
}

let testTime = "07:05:45PM";
// let testTime = "14:22:13PM";

timeConversion(testTime);
