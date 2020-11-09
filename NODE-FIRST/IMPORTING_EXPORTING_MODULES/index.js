const concat=require("./concat.js");
console.log(typeof(concat));
console.log(concat);
console.log(concat.concat("ritika","singh"));
console.log(concat.anything);

//object
// { concat: [Function: concat], anything: 'ANYTHING' }
// ritika singh
// ANYTHING