console.log(`++++++++++++++++++++== Main Array ==++++++++++++++++++++`);
let arrayNumber = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array: ${arrayNumber}`);

console.log(`============================== Step 1: Add 10 in each element ==============================`);
let arrayTransform = [];
const arrayNew = arrayNumber.map ((add)=> {
    return add+10
})
console.log(arrayNew);

console.log(`============================== Step 2: Finding cube of each element ==============================`);
const array2 = arrayNumber.map ( (cube) => {
    return cube * cube * cube;
});
console.log(array2);

console.log(`============================== Step 3: Adding their index value in each element ==============================`);
const arrayIndex = arrayNumber.map( (add, index) => {
    return add + index
});
console.log(arrayIndex);