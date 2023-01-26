const timeConversion = require("./time-conversion");

describe("timeConversion test", () => {
  it("Should return 19:05:45, when given 07:05:45PM", () => {
    expect(timeConversion("07:05:45PM")).toBe("19:05:45");
  });
  it("Should return 00:40:22 when given 12:40:22AM", () => {
    expect(timeConversion("12:40:22AM")).toBe("00:40:22");
  });
});
