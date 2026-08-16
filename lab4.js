/*4.Write a node js pgm to demonstrate custom module for student marks calculation*/
const marks=require("./marks.js")
let total=marks.calTotal(60,45,87)
let avg=marks.calAvg(total)
console.log(`Total marks=${total}`)
console.log(`Percentage=${avg}`)