//Exercise 2
let lightBulbStatus = "Broken";

// Start coding here.

let massage;

if (lightBulbStatus === "On") {
  massage = "Light bulb is On.";
} else if (lightBulbStatus === "Off") {
  massage = "Light bulb is Off.";
} else if (lightBulbStatus === "Broken") {
  massage = "Light bulb is Broken.";
} else {
  massage = "Please choose the correct input (On/Off/Broken)";
}
console.log(massage);
