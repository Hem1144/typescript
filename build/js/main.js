"use strict";
let strArray = ["one", "two", "three"];
let guitar = ["Laa", "Too", 1960];
let mix = ["mix", 1940, true];
strArray[0] = "Doe";
let tuples = ["dulal", 1, true];
let myObj;
myObj = [];
console.log(typeof myObj);
var Grade;
(function (Grade) {
    Grade[Grade["T"] = 3] = "T";
    Grade[Grade["U"] = 4] = "U";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["S"] = 6] = "S";
    Grade[Grade["C"] = 7] = "C";
})(Grade || (Grade = {}));
console.log(Grade.B);
