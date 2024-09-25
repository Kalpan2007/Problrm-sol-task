// 7. Write a function that simulates a traffic light system. The function should take the current light color (red, yellow, green) as input and print the corresponding action:
// "red" → "Stop"
// "yellow" → "Slow down"
// "green" → "Go"
let c = prompt("enter a signal color : ")
let r = "red";
let y = "yellow"
let g ="green"
if(c == r || c == y|| c == g ){
    if(c==r){
        console.log("Stop")
    }else if(c==y){
        console.log("slow down")
    }else{
        console.log("Go")
    }
}else{
    console.log("your signal color is not valid.")
}