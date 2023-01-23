const timeConversion = require("./time-conversion");

describe("timeConversion test", () => {
  it("Should return 19:05:45, when given 07:05:45PM", () => {
    timeConversion("07:05:45PM");
  });
  it("Should return 00:40:22 when given 12:40:22AM", () => {
    timeConversion("12:40:22AM");
  });
});
