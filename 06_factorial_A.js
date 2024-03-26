
console.log("***** Factorial of numbers: Assignment *****");

function factorialOfNum(n){
    let ans = 1;
    for (let index = n; index >=1; index--) {
        ans = ans * index;
     } if (n == null || n == undefined )  {
        ans = "Invalid Input"
     }
        console.log(`Factorial of ${n} is: ${ans}`);
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);