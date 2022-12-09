const { repeatedWord } = require("./hashmap-repeated-word");

describe("Tests for repeatedWord Hashmap", () => {
  test("should find a repeated word", () => {
    const str = "It was the best of times, it was the worst of times";
    const repeated = repeatedWord(str);
    expect(repeated).toBe("it");
  });

  test("should return null if repeated word is not found", () => {
    const str = "It was the best of times";
    const repeated = repeatedWord(str);
    expect(repeated).toBe(null);
  });

  test("should find first repeated word of many", () => {
    const str = `They will be condemning Doctor Dixon's experiment, by now. He'll be blamed for what happened to me. The newspapers will yelp, "Young Scientist Loses Mind As Result of Rash Experiment!" They will be wrong. I didn't lose my mind. It would be much truer to say that my mind lost me.`;
    const repeated = repeatedWord(str);
    expect(repeated).toBe("be");
  });
});
