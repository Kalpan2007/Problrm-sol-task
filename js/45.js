// 45. Given a sentence, return the longest word in it.
// ● Input: "I love programming in JavaScript"
// ● Output: "programming"

let str ="I love programming in JavaScript"
let current =0
let max=0
let x=0
let ans;
let y=0;
for(let i=0;i<str.length;i++){
    if(str[i]==' '){
        current=0
    }else{
        current++
    }
    if(current>max){
        max = current
        x=i
    }
}
for(let k=x-max+1;k<=x;k++){
    ans[y++]=str[k]
}
console.log(ans)