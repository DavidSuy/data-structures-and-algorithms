const miniMaxSum = require("./mini-max-sum");

describe("Test MiniMaxSum", () => {
  let testArrOne = [1, 2, 3, 4, 5];
  let testArrTwo = [7, 69, 2, 221, 8974];

  it("Should return 10 14, when given [1,2,3,4,5]", () => {
    expect(miniMaxSum(testArrOne)).toBe("10 14");
  });
  it("Should return 299 9271, when given [7,69,2,221,8974]", () => {
    expect(miniMaxSum(testArrTwo)).toBe("299 9271");
  });
});
