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
inferredNumber = inferredString;
console.log(`inferredString=${inferredString}`);
console.log(`inferredNumber=${inferredNumber}`);