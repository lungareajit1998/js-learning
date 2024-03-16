console.log("================ step 1 ================");

    function greaterNumber(n1,n2){
    var max = (n1>n2) ? n1 : n2 ;
    console.log(`Greatest number among ${n1} and ${n2} is:${max}`);
    
}
greaterNumber(10,-10);
greaterNumber(800,899);


console.log("================ step 2 ================");

function isEvenOrOddNum(n1){
    var result = n1%2==0 ? "True" : "False";
    console.log(`Given number is even: ${result}`);
    return result;
   }
   isEvenOrOddNum(29);
   isEvenOrOddNum(44);
   isEvenOrOddNum(101);
   isEvenOrOddNum(0);


   console.log("================ step 3 ================");
   function wordLength(word) {
    var length = word.length;
    var result = length%2==0 ? "EVEN": "ODD";
    console.log(`"${word}" word length is: ${result}`);
    return result;
   }
   wordLength("JavaScript");
   wordLength("Developer");
   wordLength("Google");