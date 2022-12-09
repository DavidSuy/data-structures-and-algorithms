const { Hashtable } = require("../../data-structures/hashtable/hashtable");

const repeatedWord = (str) => {
  const hashtable = new Hashtable();
  const words = str.split(" ").map((w) => w.toLowerCase());
  for (let i = 0; i < words.length; i++) {
    if (hashtable.has(words[i])) {
      return words[i];
    } else {
      hashtable.set(words[i], true);
    }
  }
  return null;
};

module.exports = { repeatedWord };
