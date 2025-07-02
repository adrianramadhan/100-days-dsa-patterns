function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  const result: number[] = new Array(length).fill(1);

  // Calculate the left products
  let leftProduct = 1;
  for (let i = 0; i < length; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Calculate the right products and combine with left
  let rightProduct = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}
