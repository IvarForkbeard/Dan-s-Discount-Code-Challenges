const fs = require("fs");
const streetArray = fs.readFileSync("data.txt", "utf-8");
console.log(streetArray);