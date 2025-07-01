function majorityElement(nums: number[]): number {
  // Step 1: Sort the array
  nums.sort((a, b) => a - b);

  // Step 2: Return the element at n/2 index
  return nums[Math.floor(nums.length / 2)];
}
