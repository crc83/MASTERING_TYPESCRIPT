var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray : string[] = [`first`, `second`, `third`];
var version = `es2016`;
myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), `5678`];
myNumber = myStringArray.length;
console.log(`Hello ${version} Typescript`);
console.log(`myBoolean=${myBoolean}`);
console.log(`myStringArray=${myStringArray}`);
console.log(`myNumber=${myNumber}`);
var inferredString = "this is string";
var inferredNumber = 42;
// inferredNumber = inferredString;
console.log(`inferredString=${inferredString}`);
console.log(`inferredNumber=${inferredNumber}`);
var nameIdObject = { name: "myName", id: 1, print() {}};
nameIdObject = {id: 2, name: "anotherName", print() {}};
// nameIdObject = {id: 2, name: "thirdName"};
let index : number = 0;
if (index==0) {
  let index : number = 3;
  console.log(`index = ${index}`);
}
console.log(`index = ${index}`);
enum DoorState {
  OPEN,
  CLOSED
}
console.log(`doorState ${DoorState.OPEN} ${DoorState.OPEN.toString()}`);