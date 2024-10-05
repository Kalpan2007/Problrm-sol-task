// 52.Given an array nums, the running sum of an array is defined as runningSum[i] = sum(nums[0]…nums[i]).
// Example:
// Input: nums = [1, 2, 3, 4]
// Output: [1, 3, 6, 10]

let arr=[1,2,3,4]
let sum =0
for(let i = 0;i<arr.length;i++){
    sum += arr[i]
    arr[i]=sum
}
console.log(arr)