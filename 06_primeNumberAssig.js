console.log(`=================== Finding total prime numbers ===============`);


function countPrimeNum (array) {
    let count = 0;
    for (let i=0; i < array.length; i++) {
        if (isPrime(array[i])) {
            count++;
        }
    }
    return count;
}
function isPrime(number){
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++){
        if (number% i === 0) {
            return false;
        }
    }
    return true;
}
const count = [3,9,7,6,19,29,53]
console.log(`Given Array is: ${count}`);
console.log(`Total prime no: ${countPrimeNum(count)}`);

console.log(`=================== Space Count =====================`);

function spaceCount(space) {
    let spaces = space.match(/\s/g);
    return spaces ? spaces.length:0;
}
const space = "Revision is the mother of success";
console.log(`Spaces Count in "Revision is the mother of success" is: ${spaceCount(space)}`);
const space2 = "Java Script is the language of internet world";
console.log(`Spaces Count in "Java Script is the language of internet world" is : ${spaceCount(space2)}`);