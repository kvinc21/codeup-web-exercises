"use strict";

var myVar = "apple";

function foo(param1) {
    console.log("in foo, myVar is visible and its value is " + myVar);
    console.log("in foo, param1 is visible and its value is " + param1);
    console.log("in foo, param2 is NOT visible");
}

function bar(param2) {
    param2 = "grape";
    console.log("in bar, myVar is visible and its value is " + myVar);
    console.log("in bar, param1 is NOT visible");
    console.log("in bar, param2 is visible and its value is " + param2);
}

console.log("outside functions, myVar is visible and its value is " + myVar);
console.log("outside functions, param1 is NOT visible");
console.log("outside functions, param2 is NOT visible");

foo("banana");
bar(myVar);