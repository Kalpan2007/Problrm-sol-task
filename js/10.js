// 10. Given an array of integers, count how many numbers are even and how many are odd.
// Example
// Input: [1, 2, 3, 4, 5]
// Output: Even: 2, Odd: 3
let even = 0
let odd = 0
let arr = [1, 2, 3, 4, 5]
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even += 1
    }else{
        odd += 1 
    }
}
console.log("In array even num is ", even)
console.log("In array odd num is ", odd)