const arrayNumbers = [2, 4, 1, 7, 9, 8];
console.log(`===== Traversing an array using for in loop=======`);
for (const index in arrayNumbers) {
    console.log(arrayNumbers[index]);
}
console.log(`=======Odd index elements===========`);
for (const index in arrayNumbers) {
    if (index%2!=0) {
        console.log(arrayNumbers[index]); 
    }
}
const arrayNumber = [2, 4, 1, 7, 9, 8];

for (const element of arrayNumber) {
    console.log(element);
}

let sum = 0;// 7
for (const element of arrayNumbers) {
    sum = sum + element;
}
console.log(`Sum of an array : ${sum}`);

let multiplication = 1;
for (const element of arrayNumbers) {
    multiplication = multiplication * element;
}
console.log(`multiplication of an array : ${multiplication}`);

console.log(`========================================`);
var friendList = ["Jenny", "Bill", "Andy", "Elon"];
for (const element of friendList) {
    console.log(element);
}