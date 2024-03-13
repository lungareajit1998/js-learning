console.log("*******************************************************************");



function stringHandsOn(){
    console.log("=================== Step 1 ===================");
    var string = "  Hey you are doing good, keep it up   ";
    console.log(string);
    
    console.log("=================== Step 2 ===================");
    console.log(string);
    var len = string.length;
    console.log(`its length is: ${len}`);

    console.log("=================== Step 3 ===================");
    var greet = string.trim();
    var leng = greet.length
    console.log(`${greet} and its length is: ${leng}`);

    console.log("=================== Step 4 ===================");
    var lengthBeforeTrim = len
    var lengthAfterTrim = leng
    console.log( `Total space removed is:${lengthBeforeTrim-lengthAfterTrim}`);

    console.log("=================== Step 5 ===================");
    var first = greet.substring(0,1);
    var Last = greet.substring(greet.length-1);
    console.log(`The first char after trim is: ${first}     Last char after trim is: ${Last}`);

    console.log("=================== Step 6 ===================");
    var resultValue = greet.split(" ")
    console.log(resultValue);
    console.log(`Total words are: ${resultValue.length}`);

    console.log("=================== Step 7 ===================");
    var indexOfgood = string.indexOf(`good`)
    console.log("Index of Good is: ", indexOfgood);

    console.log("=================== Step 8 ===================");
    var substring = string.substring(22);
    console.log(`Substring starting from index 22 is: ${substring}`);

    console.log("=================== Step 9 ===================");  
    var doesEndWith = greet.endsWith('up');
    console.log(`Does the string ends with "up": ${doesEndWith}`);
    
    console.log("=================== Step 10 ===================");
    var doesStartWith = greet.startsWith(`Hey`);
    console.log(`Does the string starts with "Hey": ${doesStartWith}`);

    console.log("=================== The End ===================");

}
stringHandsOn()
console.log("*******************************************************************");