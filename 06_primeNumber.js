
function isPrime(num){
    for (let index = 2; index < num; index++) {
      if (num%index==0) {
       return false;
      } 
    }
    return true;
   }
   const result = isPrime(7);
   console.log(`Is 7 Prime Number : ${result}`);
   
   const result1 = isPrime(9);
   console.log(`Is 9 Prime Number : ${result1}`);

console.log(`=================== To find how many prime nums are there ===============`);


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
console.log(`Count prime no: ${count}`);
console.log(`Total prime no: ${countPrimeNum(count)}`);

console.log(`=================== Space Count =====================`);

function spaceCount(space) {
    let spaces = space.match(/\s/g);
    return spaces ? spaces.length:0;
}
const space = "Revision is the mother of success";
console.log(`Spaces Count of 1st sentence: ${spaceCount(space)}`);
const space2 = "Java Script is the language of internet world";
console.log(`Spaces Count of 2nd sentence: ${spaceCount(space2)}`);