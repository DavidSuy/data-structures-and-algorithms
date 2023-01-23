function timeConversion(s) {
  // separate the string by : and store it in a variable called timeArr
  let timeArr = s.split(":");
  let hours = timeArr[0];
  let amPm = timeArr[2].substr(2, 4);

  // check if time is AM or PM and make sure not to include noon
  if (amPm === "PM" && hours !== "12") {
    // if so add 12 to timeArr[0]
    timeArr[0] = Number(timeArr[0]) + 12;
  }

  // check if time is midnight then change hours to 00
  if (amPm === "AM" && hours === "12") {
    timeArr[0] = "00";
  }

  // Only the first two chars in arr[2]
  // console.log(typeof timeArr[2]);
  timeArr[2] = timeArr[2].substr(0, 2);

  // join timeArr
  // return timeArr
  return timeArr.join(":");
}

module.exports = timeConversion;
