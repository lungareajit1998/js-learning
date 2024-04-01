console.log('******************************** Object 01 ********************************');
const bankSbi = {
    name : "State Bank of India",
    manager: "Ramakant Dube",
    salary: "10LPA",
    branch: "Nerli Taroda naka"
}
console.log(bankSbi);

console.log('******************************** Object 02 ********************************');
const bankLocation ={
    street: "Malegaon Road",
    city: "Nanded",
    pin: 431605
}
console.log(bankLocation);

console.log('******************************** Cloning Two Objects ********************************');
console.log('========== Step 01 ==========');
const clone01 = Object.assign({},bankSbi);
console.log(`Cloned Object 1:`,clone01);

console.log('========== Step 02 ==========');
const clone02 = Object.assign({},bankLocation);
console.log(`Cloned Object 2:`,clone02);

console.log('******************************** Creating new Object ********************************');
const rateOfInterest = {
    homeLoanInterest: "9.12% to 10.05% P.A",
    personalLoanInterest: "11% to 14% P.A",
    dueInterest: "3.50% to 7.10% P.A"
}
console.log(rateOfInterest);

console.log('******************************** Merging Three Objects ********************************');
const sbiDetails = Object.assign({}, bankSbi,bankLocation,rateOfInterest );
console.table(sbiDetails);


console.log('******************************** Traversing Objects ********************************');
for (const key in sbiDetails) {
    console.log(`${key}: ${sbiDetails[key]}`);
}