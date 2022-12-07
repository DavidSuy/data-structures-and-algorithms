const validateBrackets = require("./stack-queue-brackets");

describe("Validate Bracket", () => {
  it("Should return true, when given {}", () => {
    expect(validateBrackets("{}")).toBe(true);
  });
  it("Should return true, when given {}(){}", () => {
    expect(validateBrackets("{}(){}")).toBe(true);
  });
  it("Should return false, when given [({}]", () => {
    expect(validateBrackets("[({}]")).toBe(false);
  });
});
