// 50. Given a string and a character, count how many times the character appears in the string.
// Input: str = "hello world", char = "o"
// Output: 2
let str = prompt("type ypur string : ")
let char = prompt("type your character :")
let count =0;
for(let i=0;i<str.length;i++){
    if(str[i]==char){
        count++
    }
}
console.log(count)