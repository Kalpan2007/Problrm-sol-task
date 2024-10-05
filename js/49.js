// 49. Given an array and two indices, swap the elements at those indices.
// Input: arr = [1, 2, 3, 4], i = 1, j = 3
// Output: [1, 4, 3, 2]

let arr =[1,2,3,4]
let a = 1
let b = 3
arr[a]=arr[a]+arr[b]
arr[b]=arr[a]-arr[b]
arr[a]=arr[a]-arr[b]
console.log(arr)