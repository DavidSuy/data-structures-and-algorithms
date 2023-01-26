const lonelyinteger = require("./lonely-integer");

describe("Test lonelyinteger function", () => {
  const testArrOne = [1, 2, 3, 4, 3, 2, 1];
  const testArrTwo = [0, 0, 1, 2, 1];

  it("Should return 4, when given testArrOne", () => {
    expect(lonelyinteger(testArrOne)).toBe(4);
  });
  it("Should return 2, when given testArrTwo", () => {
    expect(lonelyinteger(testArrTwo)).toBe(2);
  });
});
