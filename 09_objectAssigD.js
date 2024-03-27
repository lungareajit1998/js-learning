
console.log("======================== Object Assignment ========================");
let professor = {
    name: "Rock",
    city: "Nanded",
    college: "Gramin Science College",
    subject: "Computer Science",
    age: 51,
    degrees: {
        engineering: "Computer Science Engineering",
        masters: "Data Science",
        MPhil: "Advance Computer Science",
        PHD: "Advance Computing",
        course: "Software Developer"
    },
    certificates:['Hacker Rank Participation','Certificate in IFE course','Certificate in Advance Programming']
}
console.log(`*************** Putting properties in an Object ****************`);
console.log(professor);

console.log(`*************** Including Nested Object ****************`);
console.log(professor.degrees);

console.log(`*************** Adding new Array in an Object ****************`);
console.log(professor.certificates);

console.log(`*************** Adding new property ****************`);
professor.totalExperience = "9 years";
console.log(`Total Experience: ${professor.totalExperience}`);
console.log(professor);

console.log(`*************** Modifying property in an Object ****************`);
professor.name = "The Rock";
console.log(professor);

console.log(`*************** Adding new certificate in an Object ****************`);
professor.certificates.splice(2,0,"Oracle Certified");
console.log(professor.certificates);

console.log(`*************** Logging the last element of the array ****************`);
var len = professor.certificates.length;
console.log(`Last element of Array is: ${professor.certificates[len-1]}`);

console.log(`*************** Complete Object on console ****************`);
console.log(professor);

console.log(`*************** Traversing Array ****************`);
for ( let i = 0; i < professor.certificates.length; i++) {
    const element = professor.certificates[i];
    console.log(element);
}