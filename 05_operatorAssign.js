console.log("================== Type 1 ==================");
function squareOfWordLength(java){

    var leng = java.length;
    var n1 = leng;
    var n2 = 2;
    return result = n1 ** n2;
}
squareOfWordLength("javaScript");
console.log(`Length square of Javascript is: ${result}`);
squareOfWordLength ("Google Chrome");
console.log(`Length square of Google Chrome is: ${result}`);
squareOfWordLength("Developer Smart");
console.log(`Length square of Developer Smart is: ${result}`);


// var java = "JavaScript"
// var google = "Google Chrome"





console.log("================== Type 2 ==================");
function anguDeve(){
    var name = "I am Angular Developer";
    var len = name.length;
    var word = name.split(" ");
    var resultValue = word.length
    var result = len / resultValue;
    console.log(`String length after Division is: ${result}`);
    var multi = len * resultValue
    console.log(`String length after Multiply is: ${multi}`);
}
anguDeve()
