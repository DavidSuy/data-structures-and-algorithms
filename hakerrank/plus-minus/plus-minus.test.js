const plusMinus = require("./plus-minus");

describe("test plusMinus function", () => {
  const testArrOne = [1, 2, 3, -1, -2, -3, 0, 0];
  const testArrTwo = [-4, 3, -9, 0, 4, 1]

  it("log 0.375000, 0.375000, 0.250000 when given testArrOne", () => {
    const logSpy = jest.spyOn(global.console, "log");

    plusMinus(testArrOne);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenCalledWith((0.375).toFixed(6));
    expect(logSpy).toHaveBeenCalledWith((0.375).toFixed(6));
    expect(logSpy).toHaveBeenCalledWith((0.250).toFixed(6));
    expect(logSpy.mock.calls).toEqual([
      [(0.375).toFixed(6)],
      [(0.375).toFixed(6)],
      [(0.25).toFixed(6)]
    ]);

    logSpy.mockRestore()
  });

  it("log 0.500000, 0.333333, 0.166667 when given testArrTwo", () => {
    const logSpy = jest.spyOn(global.console, "log");

    plusMinus(testArrTwo);

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenCalledWith((0.500000).toFixed(6));
    expect(logSpy).toHaveBeenCalledWith((0.333333).toFixed(6));
    expect(logSpy).toHaveBeenCalledWith((0.166667).toFixed(6));
    expect(logSpy.mock.calls).toEqual([
      [(0.500000).toFixed(6)],
      [(0.333333).toFixed(6)],
      [(0.166667).toFixed(6)]
    ]);
  });
});
