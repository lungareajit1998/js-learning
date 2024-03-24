console.log("************************ Array Assignment 02 ************************");
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumbers);

console.log("========== Step 1 ==========");
console.log(`The length of the element is: ${arrayNumbers.length}`);

console.log("========== Step 2 ==========");
const firstEle = arrayNumbers[0];
console.log(`The first no in Array is: ${firstEle}`);
const len = arrayNumbers.length;
console.log(`The last no in Array is: ${arrayNumbers[len-1]}`);

console.log("========== Step 3 ==========");
console.log(`The last no in Array is: ${arrayNumbers[len-3]}`);

console.log("========== Step 4 ==========");
let even = []
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 == 0)
    even.push (arrayNumbers[index]);
    
}
console.log(`Even no in array: ${even}`);

console.log("========== Step 5 ==========");
let odd = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 2 != 0) {
        odd.push(arrayNumbers[index]);
    } 
}
console.log(`Even no in array: ${odd}`);

console.log("========== Step 6 ==========");
let sumEven = 0;
for (const number in arrayNumbers) {
    if (number%2==0) {
        sumEven=sumEven+arrayNumbers[number]
    }
}
console.log(`Sum of all even numbers: ${sumEven}`);

console.log("========== Step 7 ==========");
let sumOdd = 0;
for (const number in arrayNumbers) {
    if (number%2!=0) {
        sumOdd=sumOdd+arrayNumbers[number]
    }
}
console.log(`Sum of all odd numbers: ${sumOdd}`);

console.log("========== Step 8 ==========");
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];  
    sum = sum + element;
}
console.log(`Sum of all elements from array is: ${sum}`);

console.log("========== Step 9 ==========");
console.log(`The no which are multiple of 5:`);
for(const number of arrayNumbers) {
    if(number%5==0){
        console.log(`${number}`);
    }
}
console.log("========== Step 10 ==========");
console.log(`Is no 115 available in array: ${arrayNumbers.includes(115)}`);

console.log("========== Step 11 ==========");
console.log(`Is no 23 available in array: ${arrayNumbers.includes(23)}`);

console.log("========== Step 12 ==========");
const insertElement = arrayNumbers.splice(3, 0, 55,66);
console.log(`Array after inserting 55 & 66:`);
console.log(arrayNumbers);

console.log("========== Step 13 ==========");
const deleteElement = arrayNumbers.splice(4,3);
console.log(`Deleted elements: ${deleteElement}`);
console.log(`Array after deleting 3 elements:`);
console.log(arrayNumbers);

