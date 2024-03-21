console.log("========================= Array Assignment =========================");
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original String:`, fruits_seasonal);

console.log("========== Step 1 ==========");
console.log(`Total length: `,fruits_seasonal.length);
const element0 = fruits_seasonal[0];
console.log(`First element is: `,element0);
console.log(`Last element is : `,fruits_seasonal[4]);

console.log("========== Step 2 ==========");
fruits_seasonal.unshift("Papaya");
console.log(`Adding element before index:`,fruits_seasonal);

console.log("========== Step 3 ==========");
const delete3 = fruits_seasonal.splice(4,1);
console.log(`Removing element is: `,delete3);
console.log(`Element removed: `,fruits_seasonal);

console.log("========== Step 4 ==========");
const addElement = fruits_seasonal.push("Pineapple");
console.log(`Added element at last: `,fruits_seasonal);

console.log("========== Step 5 ==========");
const addEle = fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(`Inserting element is: `,addEle);
console.log(`Inserted element before Water Melon: `,fruits_seasonal);

console.log("========== Step 6 ==========");
const replace = fruits_seasonal.splice(2,1,"Kiwi");
console.log(`Replacing element is: `,replace);
console.log(`Replaced element with Orange: `,fruits_seasonal);

console.log("========== Step 7 ==========");
const slice = fruits_seasonal.slice(1,4);
console.log(`Logging elements from 1 to 4: `,slice);
console.log("====Or====");
const split = fruits_seasonal.slice(0,4);
console.log(`Logging elements from 1 to 4: `,split);

console.log("========== Step 8 ==========");
const lastThreeEle = fruits_seasonal.slice(fruits_seasonal.length - 3);
console.log(`Last three elements are: `,lastThreeEle);

