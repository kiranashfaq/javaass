// 1 point
// literal notation
var studentName = ["Ali", "ahmed", "abdullah", "mustafa"];
// 2 point
// object notation
var studentName2 = [
  {
    name: "Ali",
    age: 19,
  },
  {
    name: "ahmed",
    age: 21,
  },
  {
    name: "abdullah",
    age: 18,
  },
  {
    name: "mustafa",
    age: 19,
  },
];
// 3 point
// string Array
var stringName = ["Kainat", "kiran", "alveena", "madiha", "eman"];

// 4 point
// number array
var number = [17, 19, 11, 14];

// 5 point
// Boolean array
var booleanArray = [true, false, true, false];

// 6 point
// mixed array
var mixedName = ["ahmed", 21, "mustafa", 20, "kainat", 17, "kiran", 16, false];

// 7 point
// qualification
var qualification = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "B.COM",
  "MS",
  "M.Phil.",
  "PhD.",
];
document.write("<h2>Qualification</h2>");
document.write(
  qualification[0],
  "<br>",
  qualification[1],
  "<br>",
  qualification[2],
  "<br>",
  qualification[3],
  "<br>",
  qualification[4],
  "<br>",
  qualification[5],
  "<br>",
  qualification[6],
  "<br>",
  qualification[7],
  "<br>"
);
// 8 point
// marksheet
document.write("<h2>Marksheet  </h2>");

var studentNames = ["micheal", "john", "tony"];
var marks = [320, 230, 480];
var totalMarks = 500;
var percentage0 = (marks[0] * 100) / totalMarks;
var percentage1 = (marks[1] * 100) / totalMarks;
var percentage2 = (marks[2] * 100) / totalMarks;
document.write(
  "Score of ",
  studentNames[0],
  " is ",
  marks[0],
  ". Percentage ",
  percentage0,
  "% <br>"
);
document.write(
  "Score of ",
  studentNames[1],
  " is ",
  marks[1],
  ". Percentage ",
  percentage1,
  "% <br>"
);
document.write(
  "Score of ",
  studentNames[2],
  " is ",
  marks[2],
  ". Percentage ",
  percentage2,
  "% <br>"
);
// 9 point
// A point
document.write("<h2> Changing in colors  </h2>");

var colors = ["red", "blue", "green", "orange"];
// add the color to the beginning
document.write(" <b> original Array: </b>" + colors);
var colorToAdd = prompt("what color do you want to add to the beginning?");
colors.unshift(colorToAdd);
document.write(
  "<br> <b> updated array(added to the beginning): </b> " + colors
);
// b point
var colorToAdd = prompt("What color do you want to add to the end?");
colors.push(colorToAdd);
document.write("<br><b> Updated array (added to the end): </b> " + colors);
// c point
colors.unshift("olive", "hazel");
document.write(
  "<br> <b> Updated array after adding two more colors to the beginning </b> :" +
    colors
);
// d point
// delete the first element
colors.shift();
document.write(
  "<br><b> Updated array (delete to the beginning ): </b> " + colors
);
// e point
// delete at the end
colors.pop();
document.write("<br><b> Updated array (delete to the end ): </b> " + colors);
// f point

// 10 point
document.write("<h2> sorting in ascending order  </h2>");

var studentScore = [320, 230, 480, 120];
document.write(
  "<b> Score of Student </b>",
  studentScore[0],
  ",",
  studentScore[1],
  ",",
  studentScore[2],
  ",",
  studentScore[3],
  "<br>"
);
studentScore.sort();
document.write("<b>Ordered score of students </b>" + studentScore + "<br>");

// 11 point
document.write("<h2>Cities</h2>");
var cities = ["Karachi ", "Lahore ", "Islamabad ", "Quetta ", "Peshawar"];
document.write("<b>Cities List : </b>" + cities + "<br>");
document.write(
  "<b>Selected Cities list : </b>" + cities[2],
  cities[3],
  cities[0] + "<br>"
);

// 12 point
var cat = ["This ", "is ", "my ", "cat"];
document.write(cat[0], cat[1], cat[2], cat[3]);

// 15 point
var mobilePhones = [
  "Apple ",
  "Samsung ",
  "Motorola ",
  "Nokia ",
  "Sony",
  "Haier",
];
document.dr;
