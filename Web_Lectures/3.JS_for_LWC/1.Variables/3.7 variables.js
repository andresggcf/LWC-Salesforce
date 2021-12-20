/********** Var Keyword **********/
/* It can ve updated and can be re declared */

var course = "Zero to Hero";
console.log(course);
//Update var
course = "Zero to Hero in LWC";
console.log(course);

//When declaring a var, it goes to a window object:
var course = "Re-declared"
console.log(window.course);

//Function level:
function testVar(){
    var func1 = "Hero in LWC";
    console.log("func1 in function: " + func1);
}
//console.log("func1 outside  function: " + func1); //Error

testVar();

//Block Level:
if(2 === 2){
    var block1 = 10;
    console.log("block1 in block: " + block1);
}
console.log("block1 outside block: " + window.block1);




/********** let Keyword **********/
/* It can be updated but not re-declared */

let course2 = "Course Zero to Hero";
course2 = "LWC";
console.log("Course2: " + course2);
//let course2 = "R"; //Error

//Function Level:
function testLet(){
    let func2 = "x";
    console.log("func2 inside function: " + func2);
}
//console.log("func2 outside function: " + func2); //Error

testLet();

//Block Level:
if (2 === 2){
    let block2 = "y";
    console.log("block2 inside block: " + block2);
}
//console.log("block2 outside block: " + block2); //Error




/********** const Keyword **********/
/* It can't be updated or re-declared */