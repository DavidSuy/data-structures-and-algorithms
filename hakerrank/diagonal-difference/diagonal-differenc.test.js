const diagonalDifference = require("./diagonal-difference");

describe("test diagonalDifference", () => {
  let arrOne = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ];

  it("should return 15, when given nOne and arrOne as arguments", () => {
    expect(diagonalDifference(arrOne)).toBe(15);
  });
});
