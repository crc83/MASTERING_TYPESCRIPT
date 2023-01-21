"use strict";
var myBoolean = true;
var myNumber = 1234;
var myStringArray = ["first", "second", "third"];
var version = "es2016";
myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), "5678"];
myNumber = myStringArray.length;
console.log("Hello ".concat(version, " Typescript"));
console.log("myBoolean=".concat(myBoolean));
console.log("myStringArray=".concat(myStringArray));
console.log("myNumber=".concat(myNumber));
var inferredString = "this is string";
var inferredNumber = 42;
// inferredNumber = inferredString;
console.log("inferredString=".concat(inferredString));
console.log("inferredNumber=".concat(inferredNumber));
var nameIdObject = { name: "myName", id: 1, print: function () { } };
nameIdObject = { id: 2, name: "anotherName", print: function () { } };
// nameIdObject = {id: 2, name: "thirdName"};
var index = 0;
if (index == 0) {
    var index_1 = 3;
    console.log("index = ".concat(index_1));
}
console.log("index = ".concat(index));
var DoorState;
(function (DoorState) {
    DoorState[DoorState["OPEN"] = 0] = "OPEN";
    DoorState[DoorState["CLOSED"] = 1] = "CLOSED";
})(DoorState || (DoorState = {}));
console.log("doorState ".concat(DoorState.OPEN, " ").concat(DoorState.OPEN.toString()));
//# sourceMappingURL=hello_typescript.js.map