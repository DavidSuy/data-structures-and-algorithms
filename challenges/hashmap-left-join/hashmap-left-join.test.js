const { Hashtable } = require("../../data-structures/hashtable/hashtable");
const { hashmapLeftJoin } = require("./hashmap-left-join.js");

describe("Hashmap Left Join", () => {
  test("should left join two hashmaps", () => {
    const h1 = new Hashtable();
    const h2 = new Hashtable();

    const synonyms = {
      diligent: "employed",
      fond: "enamored",
      guide: "usher",
      outfit: "garb",
      wrath: "anger",
    };

    const antonyms = {
      diligent: "idle",
      fond: "averse",
      guide: "follow",
      flow: "jam",
      wrath: "delight",
    };

    for (let key in synonyms) {
      h1.set(key, synonyms[key]);
    }
    for (let key in antonyms) {
      h2.set(key, antonyms[key]);
    }

    const expectedResults = [
      ["fond", "enamored", "averse"],
      ["wrath", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", null],
      ["guide", "usher", "follow"],
    ];
    const results = hashmapLeftJoin(h1, h2);
    expectedResults.sort((arr1, arr2) => (arr1[0] < arr2[0] ? -1 : 1));
    results.sort((arr1, arr2) => (arr1[0] < arr2[0] ? -1 : 1));
    expect(results).toEqual(expectedResults);
  });
});
