var fName = "swastisunder";
var lName = "Badatya";

// Js is a loosely typed language

function addNumber(num1, num2) {
  var result = num1 + num2;
  console.log("result is ", result);
}

addNumber(2, 3);
addNumber(8, 2);

// var age = 22;

// if (age >= 18) {
//   console.log("Can voat");
// } else {
//   console.log("Can't Voat");
// }

// LOOPS
// FOR LOOP
// Init        Condition     Increment - Har turn mai x ko 1 se aage bada do
for (var x = 1; x <= 10; x = x + 1) {
  // Code jisko loop karwana hai
  // console.log('Meri x ki value', x);
}

/**
 * DRY RUN
 * X     Condition (x <= 3)     X = x + 1     Console
 * 1     True                                 Meri x ki 1
 * 2     True                                 Meri x ki 2
 * 3     True                                 Meri x ki 3
 * 4     False
 * Loop End
 */

// while

// var fileSize = 1024;
// var currentFileDownloaded = 0;
// while (currentFileDownloaded < fileSize) {
//   console.log("download");
//   currentFileDownloaded += Math.floor(Math.random() * (60 - 20 + 1) + 20);
// }


// do while Home work