/*Equality Comparison*/

//Normal Comparison "=="
//Compares value but not type
console.log(3==3);
console.log("Andres" == "Andres");
console.log(3 == "3");

//Strict Comparison "==="
//Compares value and data type
console.log(3===3); //true
console.log(3 === "3") //false

//Undefined vs Null
var x;
console.log(x);

var y = null;
console.log(y);

console.log(x==y); //true
console.log(x===y); //false
