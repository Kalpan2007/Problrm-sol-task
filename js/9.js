//9. Sort an Array in Ascending Order Example: Input: nums = [4,2,8,5,1]; Output: nums = [1,2,4,5,8].
// let nums = [4,2,8,5,1]
// function tosort(arr){
//     return arr.sort();
// }
// console.log(tosort(nums))






let arr = [4,2,8,5,1]
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            [arr[i],arr[j]]=[arr[j],arr[i]]
        }
    }
}
console.log(arr)