let array = ["10", "20", "40", null];

delete array[1];

for(let i = 0; i < array.length; i++) {
  console.log(`array[${i}] = ${array[i]}`);
  console.log(`array[${i}] = ${( array[i] ?? "42")}`);
}