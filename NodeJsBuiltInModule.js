// const fs = require("fs");
// const text = fs.readFileSync("Yo.css","utf-8");
// console.log(text);

// To make a new file and write in it

const fs = require("fs");
text = fs.readFileSync("Yo.css","utf-8");
console.log(text);
text = text.replace("p", "j");

console.log(text);

console.log("Creaating a new file ..")
fs.writeFileSync("NodeJsPractise.txt", text);
