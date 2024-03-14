// //  1 point 
 var binary = prompt("write a alphabet" , "A , Z , a , z")
if(binary === "A"){
    alert("A = 65")
}else if (binary === "Z"){
    alert("Z = 90")
}else if (binary === "a"){
    alert("a = 97")
}else if (binary === "z"){
    alert("z = 122")
}else{
    alert("wrong input")
}
// 2 point 
var num1 = prompt("enter a first number")
var num2 = prompt("enter a second number");
if (num1 < num2){
    alert(num1 + " is less than " + num2)
}else if (num1 > num2){
    alert(num1 + " is greater than " + num2)
}else if (num2 < num1){
    alert(num2 + " is less than " + num1)
}else if (num2 > num1){
    alert(num2 + " is greater than " + num1)
}else if (num1 === num2){
    alert(num1 + " is equal to " + num2)
}else {
    alert("plz enter any number")
}
// 3 point 
var number = prompt("enter any number")
if(number > 0){
alert("The integer is positiver integer")
}else if (number < 0){
    alert("The integer is negative integer")
}else if (number === 0){
    alert("The integer is zero")
}else {
    alert("plz enter a number")
}




// 4 point 
var vowels = prompt("enter any letter")
if (
  vowels === "a" ||
  vowels === "e" ||
  vowels === "i" ||
  vowels === "o" ||
  vowels === "u"
) {
  alert(`This alphabet ${vowels} is vowel letter`);
}else{
    alert(`This alphabet ${vowels} is not vowel letter`);
}


//5 point 
var myPassword = "abc"
var password = prompt("enter a password")

if(password === myPassword){
    alert("Correct ! The password you entered matches the original password")
}else if (password == ""){
    alert("Please enter your password")
}else{
    alert("incorrect password")
}
//6 point 
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
//7 point 
var time = prompt("Enter a time in 24 hour format")
if (time >= 0 && time < 12 ){
    alert("Good morning")
}else if (time >= 12 && time < 17 ){
    alert("Good afternoon")
}else if (time >= 17 && time < 21  ){
    alert("Good evening")
}else if (time >= 21 && time <=2359){
    alert("Good night")
}else {
    alert("plz enter a hour")
}