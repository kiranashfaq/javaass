// 1 point
var empty = [[]];

// 2 point
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
document.write(matrix, "<br>");

// 3 point
document.write(`<h3>Counting</h3>`);

for (let i = 1; i <= 10; i++) {
  document.write(i, "<br>");
}
// 4 point
// var tableNum = +prompt("which table do you want?");
// var length = +prompt(`how much ${tableNum} table length do you want ?`);
// document.write(`<h3>Table of ${tableNum} </h3>`);
// document.write(`<h5>Length ${length}</h5>`);
// for (let i = 1; i <= length; i++) {
//   document.write(`${tableNum} x ${i} = ${tableNum * i} <br>`);
// }
// 5 point
document.write(`<h3>Fruits</h3>`);
var fruits = ["apple", "banana", "mango", "orange", "strawberry "];
for (let i = 0; i < fruits.length; i++) {
  document.write(`${fruits[i]} <br>`);
}
for (let i = 0; i < fruits.length; i++) {
  if (i % 2 === 0) {
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
  } else {
    document.write(`Element at index ${i} is ${fruits[i]} <br>`);
  }
}
//6 point
document.write(`<h3>Series</h3>`);
document.write(`<h4>Counting</h4>`);

for (let i = 1; i <= 15; i++) {
  document.write(`${i},`);
}
 document.write( "<br>");
 document.write(`<h4>Reverse Counting</h4>`);
 for (let i = 10; i >= 1; i--) {
  document.write(`${i},`);}
  document.write("<br>");

 document.write(`<h4>Even</h4>`);
for (let i = 0; i <=20; i++) {
if (i %2== 0) {
  document.write(`${i},`)
}
}
 document.write("<br>");

 document.write(`<h4>Odd</h4>`);
 for (let i = 0; i <=20; i++) {
if (i %2== 1) {
    document.write(`${i},`);

}
 }
document.write("<br>");

document.write(`<h4>series</h4>`);
 for (let i = 1; i <= 20; i++) {
   if (i % 2 == 0) {
     document.write(`${i}k,`);
   }
 }
 document.write("<br>");

 // 7 point

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

var takeItem = prompt(
  "Welcome to ABC bakery What do you Want to Order Sir/Ma'am?"
);
var matchFound = false;
for (let i = 0; i < bakery.length; i++) {
  if (bakery[i] == takeItem) {
    matchFound = true;
    document.write(
      `${takeItem} is <b>available</b> at index ${i} in our bakery <br>`
    );
    break;
  }
}
if (matchFound == false) {
  document.write(
    `We Are sorry ${takeItem} is <b>not available</b> in our bakery <br>`
  );
}

// 8 point
document.write("<h3>Largest Number</h3>");
var largestNum = [24, 53, 78, 91, 12];
var highest = 0;
document.write(`Array items : ${largestNum}`);
for (let i = 0; i < largestNum.length; i++) {
  if (highest < largestNum[i]) {
    highest = largestNum[i];
  }
}
document.write(`The Largest Number is ${highest}`);

//9 point
document.write("<h3>Lowest Number</h3>");
var lowestNum = [24, 53, 78, 91, 12];
var lowest = 0;

document.write(`Array items : ${lowestNum}`);
for (let i = 0; i < lowestNum.length; i++) {
  if (lowest != lowestNum[i]) {
    lowest = lowestNum[i];
  }
}
document.write(`The lowest  Number is ${lowest}`);

// 10 point
document.write("<h3>5 ranging</h3>");
var range = 5;
for (let i = 1; i <= 20; i++) {
  var range1 = range * i
  document.write(`${range1},`);
}
document.write("<br>")

