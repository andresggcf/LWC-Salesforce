/********** Var Keyword **********/
/* Data Types in JS are
1. number
2. string
3. boolean
4. bigInt
5. undefined
6. null
7. object
8. symbol
*/

//number
var a = 10;
console.log(typeof a);

//big int
var b = 1283712839123n;
console.log(typeof b);

//string
var c = "string";
console.log(typeof c);

//boolean
var d = true;
console.log(typeof d);

//undefined
var e;
console.log(typeof e);

//object
var f = {};
console.log(typeof f);

//Array object
var g = [];
console.log(typeof g);

//symbol
var h = Symbol("id");
console.log(h);

//Null object
var i = 10;
i = null;
console.log(typeof i); //Shows object

//String() Boolean()
console.log(typeof new String("hey"));