console.log("########### Step 1 ###########"); 
function add(){
    console.log("No Arguments");
}
add();
function show(){
    console.log("No Value");
}
show();
console.log("########### Step 2 ###########");
console.log("======== personalDetails ========");
    function personalDetails(firstName,lastName,collegeName){
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("College Name:", collegeName);
}
personalDetails(" Ajit"," Lungare"," Gramin College")

console.log("########### Step 3 ###########");
function swapValues(name1,name2) {
    var name1 = "Virat"
    var name2 = "Anushka"
    console.log("==== Before Swap====");
    console.log("Virat:",name1,"Anushka:",name2);
    var t = name1
    name1 = name2
    name2 = t
    console.log("==== After Swap====");
    console.log("Virat:",name1,"Anushka:",name2);
}
swapValues("Virat", "Anushka")

console.log("*************************");
function swapNumber(x,y) {
    var x = "1000"
    var y = "2000"
    console.log("==== Before Swap====");
    console.log("1000:",x,"2000:",y);
    var t = x
    x = y
    y = t
    console.log("==== After Swap====");
    console.log("1000:",x,"2000:",y);
}
swapNumber(1000,2000)

console.log("########### Step 4 ###########");
function addThreeValues(n1,n2,n3) {
    console.log("Arguments: ", n1, n2, n3);
    var result = n1+n2+n3;
    console.log("Addition : ", result);
}
addThreeValues(10.23,600,40)
addThreeValues("Hello"," Good"," Morning")