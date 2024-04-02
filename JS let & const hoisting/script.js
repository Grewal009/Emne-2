//console.log(a); //variable a is hoisted but can't access it before initialization
console.log(b); //variable b is hoisted
let a = 100;
var b = 10;
console.log(a);

/* 
var variables are hoisted in global scope 
whereas let and const variables are hoisted in memory other than global scope i.e TDZ.
 */
