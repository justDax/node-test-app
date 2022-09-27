const _ = require("lodash")
const fs = require('fs')
const sum = require("./sum.js");

const array1 = [1, 2, 3, 4, 5, 6, 7]

let fileData = fs.readFileSync("./array.json");
let data = JSON.parse(fileData);
let array2 = data["array"];

const concatRes = _.concat(array1, array2);

console.log(`concat result is ${concatRes}`)

console.log(`first array sum: ${sum.sum(array1)}`)
console.log(`json array sum: ${sum.sum(array2)}`)
console.log(`concat array sum: ${sum.sum(concatRes)}`)