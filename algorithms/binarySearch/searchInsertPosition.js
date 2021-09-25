// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let upperBound = nums.length - 1;
	let lowerBound = 0;
	while (true) {
		let guessIdx = Math.round((upperBound + lowerBound) / 2);
		let guess = nums[guessIdx];
		console.log(`Upper ${upperBound}`);
		console.log(`Lower ${lowerBound}`);
		console.log(`GuessIdx ${guessIdx}`);
		console.log(`Guess ${guess}`);
		if (guess === target) {
			return guessIdx;
		}
		if (upperBound === lowerBound) return guess < target ? ++upperBound : upperBound;
		if (guess > target) {
			if (nums[guessIdx - 1] < target) return guessIdx;
			upperBound === guessIdx && upperBound !== 0 ? upperBound-- : (upperBound = guessIdx);
		} else {
			if (nums[guessIdx + 1] > target) return ++guessIdx;
			lowerBound = guessIdx;
		}
	}
};

console.log(searchInsert([1, 3, 5], 4));
