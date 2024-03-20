
console.log("+++++++++ Step 1 +++++++++");
const string ="I am very good IT Developer";
const vowels = "aeiou";
let vowelsCount = 0;
for (let index = 0; index < string.length; index++) {
    let char = string.charAt(index);
    let lowerCase=char.toLowerCase()
    if (vowels.includes(lowerCase)) {
        vowelsCount++
    }

    
}
console.log(`The total no of vowels in given string are : ${vowelsCount}`);

console.log("+++++++++ Step 2 +++++++++");
let sum = 0;
for (let index = 0; index <=5; index++) {
    sum= sum + index*index*index;
    
}
console.log(`The sum of cube of numbers from 1 to 5 is : ${sum}`);

console.log("+++++++++ Step 3 +++++++++");
function odd(arg){
    for (let index = 0; index < arg.length; index++) {
        const element = arg.charAt(index);
        if(index%2!=0 && element!=" "){
            console.log(element);
        }
        
    }
}
console.log("Odd positioned chars of 1st String");
odd("Hard work always pays back");
console.log("Odd positioned chars of 2nd String");
odd("Soon I will be UI IT Champ")