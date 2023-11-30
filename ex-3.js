//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
//ให้นำคำตอบจากโจทย์ Exercise 1 มาเขียนใหม่ในรูปแบบ Ternary Operator
//กรณีที่ไม่เข้าเงื่อนไขใด ๆ เลยให้โปรแกรมหลอดไฟแสดงข้อความว่า “Please choose the correct input (On/Off)” ออกมาทางหน้าจอด้วย console.log()

let massage =
  lightBulbStatus === "On"
    ? "Light bulb is On."
    : lightBulbStatus === "Off"
    ? "Light bulb is Off."
    : "Please choose the correct input (On/Off)";

console.log(massage);
