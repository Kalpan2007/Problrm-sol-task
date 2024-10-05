// 48.Given a string, return a new string with all vowels removed.
// Input: "hello"
// Output: "hll"
let str = "hello"
let nstr = ""
let k = 0
for(let i =0;i<str.length;i++){
    if(!(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')){
       nstr += str[i]
    }
}
console.log(nstr)