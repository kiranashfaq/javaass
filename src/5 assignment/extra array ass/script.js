// 1 point
// slice method
document.write("<h2>Slice Method</h2>");
var sliceNumber = [1, 2, 3, 9, 5, 6];
document.write("<b>Original array : </b> " + sliceNumber + "<br>");
var sliceChanging = sliceNumber.slice(3, 4);
document.write("<b>The Element i removed : </b>" + sliceChanging + "<br>");
document.write("<b>After Changing  : </b> " + sliceNumber + "<br>");
document.write("<b>In this method the original array doesn't effect</b>");

// 2 point
// splice method
document.write("<h2>Splice Method</h2>");
var spliceFruit = [
  "Lemon ",
  " Kiwi ",
  " Apple ",
  " Banana ",
  " Orange ",
  " Grapes ",
];
document.write("<b>Original Array : </b>" + spliceFruit + "<br>");
var changingSplice = spliceFruit.splice(2, 2);
document.write("<b>Updated Array :</b>" + spliceFruit + "<br>");
document.write("<b>Element i removed :</b>" + changingSplice + "<br>");
// 3 point
// shift method
document.write("<h2>Shift Method</h2>");
var shiftName = ["Ahmed ", " Mustafa ", " Ali ", " Abdullah ", " Ahsan "];
document.write("<b>Original Array : </b>" + shiftName + "<br>");
var afterChange = shiftName.shift();
document.write("<b>Updated Array :</b>" + shiftName + "<br>");
document.write("<b>Element i removed :</b>" + afterChange + "<br>");
// 4 point
// unshift method
document.write("<h2>UnShift Method</h2>");
var unshiftName = [" Red", " Orange ", " Blue ", " Yellow ", " Green "];
document.write("<b>Original Array : </b>" + unshiftName + "<br>");
var afterChangeUnshift = unshiftName.unshift("Pink");
document.write("<b>Updated Array : </b>" + unshiftName + "<br>");
// 5 point
// push method
document.write("<h2>Push Method</h2>");
var pushMethod = [2, 3, 7, 1, 8, 5, 9];
document.write("<b>Original Array : </b>" + pushMethod + "<br>");
var pushChanging = pushMethod.push(13);
document.write("<b>Updated Array : </b>" + pushMethod + "<br>");

// 6 point
// pop method
document.write("<h2>Pop Method</h2>");
var popMethod = [21, 34, 76, 18, 89, 54, 90];
document.write("<b>Original Array : </b>" + popMethod + "<br>");
var pushChanging = popMethod.pop();
document.write("<b>Updated Array : </b>" + popMethod + "<br>");

// 7 point
document.write("<h2>Slice Moving Method</h2>");

var sliceFlower = [
  " Rose ",
  " Lily ",
  " Jasmine ",
  " Lotus ",
  " SunFlower ",
  " Lavender ",
];
document.write("<b>Original Array : </b>" + sliceFlower + "<br>");

var sliceMoving1 = sliceFlower.slice(1, 4);
var moving = [sliceMoving1];
document.write("<b>Move this Flower with slice method </b>" + moving + "<br>");
document.write(
  "<b>Updated Array 'This array doesn't effect': </b>" + sliceFlower + "<br>"
);
// 8 point
document.write("<h2>Splice Removing Method</h2>");

var spliceDish = [
  " Biryani ",
  " Chinese ",
  " Polaow ",
  " Tikka ",
  " Karahi ",
  " Noodles ",
];
document.write("<b>Original Array : </b>" + spliceDish + "<br>");

var spliceMoving1 = spliceDish.splice(3, 5);
var movingDish = [spliceMoving1];
document.write(
  "<b>Remove this dishes with splice method </b>" + movingDish + "<br>"
);
document.write(
  "<b>Updated Array 'The original array effect': </b>" + spliceDish + "<br>"
);
// 9 point
// shift method removing
document.write("<h2>Remove all elements with Shift Method</h2>");
var carsShift = [
  "Fortuner ",
  " Land Cruiser ",
  " Porsche ",
  " Bugatti ",
  " MCLaren ",
];
document.write("<b>Original array : </b> " + carsShift + "<br>");
var carRemove1 = carsShift.shift();
document.write("<b>Updated array : </b>" + carsShift + "<br>");
var carRemove2 = carsShift.shift();
document.write("<b>Updated array : </b>" + carsShift + "<br>");
var carRemove3 = carsShift.shift();
document.write("<b>Updated array : </b>" + carsShift + "<br>");
var carRemove4 = carsShift.shift();
document.write("<b>Updated array : </b>" + carsShift + "<br>");
var carRemove5 = carsShift.shift();
document.write("<b>Updated array : </b>" + carsShift + "<br>");

// 10 point
// push adding method
document.write("<h2>Adding multiple elements with push Method</h2>");
var phones = ["Iphone ", " Google Pixel ", " Samsung "];
document.write("<b>Original array : </b>" + phones + "<br>");
var phoneAdding = phones.push(
  " Infinx ",
  " Redmi  ",
  " Realme ",
  " Nokia ",
  "  QMobile "
);
document.write("<b>After adding phones name with push : </b>" + phones);
