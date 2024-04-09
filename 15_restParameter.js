
function add(n1, n2, ...value){
    console.log(n1,n2);
    console.log(value);
}
add(5, 6, 7, 8);
function division(n1,n2=1){
    console.log(`n1: ${n1}, n2: ${n2}`);
    console.log(n1/n2);
}
division(2,5);
division(7)