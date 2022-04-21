const fs = require("fs");

// fs.readFile('file.txt', 'utf8'/*encoder*/, (err, data)=> {
//   console.log(err,data)
// })

const a = fs.readFileSync("file.txt");
console.log(a.toString());
console.log("this is shivam");

// fs.writeFileSync("file.txt", "Add full name is shivam", () => {
//   console.log("written to the file");
// });

const c = fs.writeFileSync("file.txt", "Add this to the file");
console.log(c);
