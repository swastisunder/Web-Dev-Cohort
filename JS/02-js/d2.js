// 1.
const nums = [3, 10, 24, 90];

const result = map((e) => e * 10 + 1);

function map(fn) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];
    const num = fn(currentElement);
    result.push(num);
  }

  return result;
}

console.log(result);

// 2.
const nums2 = [3, 10, 24, 90, 80, 34, 67];

const result2 = nums.forEach(function (e) {
  if (e % 2 === 0) {
    console.log(e);
  }
});
console.log(result2);
