console.log(`============================== Step 1 ==============================`);
let show = () => {
    console.log(`Good Morning, Today is Monday.`);
}
show();


console.log(`============================== Step 2 ==============================`);
let math = (n1, n2, n3=1) => {
    console.log(`Given Values: ${n1}, ${n2}, ${n3}`);
    console.log(`Addition is: ${n1*n2*n3}`);
}
math(5,5,2);
math(10,4);


console.log(`============================== Step 3 ==============================`);
let add = (n1,n2,n3,n4,n5) => {
    console.log(`Given Values: ${n1}, ${n2}, ${n3}, ${n4}, ${n5}`);
    console.log(`Addition of given no is: ${n1+n2+n3+n4+n5}`);
}
add(100,100,200,349,756);
add("I am ", "learning ", "ES6 ", `features `, "in depth");