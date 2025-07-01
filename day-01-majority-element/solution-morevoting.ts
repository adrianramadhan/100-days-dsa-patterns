function majorityElementVoting(nums: number[]): number {
  // Step 1: Initialize candidate and count
  let candidate: number | null = null;
  let count: number = 0;

  // Step 2 & 3: Traverse the array to find the candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  // Candidate is the majority element
  return candidate as number;
}
