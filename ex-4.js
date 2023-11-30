//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
let massage;

switch (lightBulbStatus) {
  case "on":
    massage = "Light bulb is On.";
    break;
  case "Off":
    massage = "Light bulb is Off.";
    break;
  case "Broken":
    massage = "Light bulb is Broken.";
  default:
    massage = "Please choose the correct input (On/Off/Broken)";
}
console.log(massage);
