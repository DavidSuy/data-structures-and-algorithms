function hashmapLeftJoin(h1, h2) {
  const result = [];
  const leftItems = h1.all();
  for (let left of leftItems) {
    const [leftKey, leftValue] = left;
    const rightValue = h2.get(leftKey);
    if (rightValue) {
      result.push([leftKey, leftValue, rightValue]);
    } else {
      result.push([leftKey, leftValue, null]);
    }
  }
  return result;
}

module.exports = { hashmapLeftJoin };
