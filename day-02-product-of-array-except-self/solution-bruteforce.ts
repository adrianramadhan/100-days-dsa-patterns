// The brute-force approach involves computing the product for each index by multiplying all the elements of the array except for the element at that index. This can be done using two loops, where for each element, we iterate over the array to calculate the product of all other elements.

function productExceptSelfBf(nums: number[]): number[] {
  const length = nums.length;
  const result: number[] = new Array(length).fill(1);

  for (let i = 0; i < length; i++) {
    let product = 1;
    for (let j = 0; j < length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    result[i] = product;
  }
  return result;
}
