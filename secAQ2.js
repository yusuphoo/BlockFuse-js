function twoSum(nums, target) {
  const numToIndex = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(nums[i], i);
  }
  return [];
}

console.log("Input: nums = [2,7,11,15], target = 9");
console.log("Output:", twoSum([2, 7, 11, 15], 9));
console.log("Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].");
