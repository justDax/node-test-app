const _ = require("lodash")
const fs = require('fs');


const array1 = [1, 2, 3, 4, 5, 6, 7]


let fileData = fs.readFileSync("./array.json");
let data = JSON.parse(fileData);

const concatRes = _.concat(array1, data["array"]);

console.log(`concat result is ${concatRes}`)