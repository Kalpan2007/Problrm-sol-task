//6. Write a function that checks if a username and password match predefined values. If the username is "admin" and the password is "1234", print "Login successful"; otherwise, print "Login failed."
let user = prompt("type your username : ")
let pass = prompt("type your password : ")

if(user=="admin" && pass == 1234){
    console.log("Login successful")
}else{
    console.log("Login failed")
}