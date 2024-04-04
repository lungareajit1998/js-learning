
const personJSON = `
{
    "name": "Aleix Melon", 
    "id": "E00245",
    "role": ["Dev","DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`;
console.log(`========================= Converted into Object =========================`);
const personObject = JSON.parse(personJSON);
console.log(`Data type: ${typeof personObject}`);
console.log(personObject);
console.log(`========================= Log Dev =========================`);
console.log(`First element of role: ${personObject.role[0]}`);

console.log(`========================= Last element of Name =========================`);
var lastEle = personObject.name.split(" ");
console.log(lastEle);
var len = lastEle.length;
console.log(`Last Name: ${lastEle[len-1]}`);

console.log(`========================= Employee joining year =========================`);
var result = personObject.doj.split("-");
console.log(result);
var len = result.length;
console.log(`Year of joining: ${result[len-1]}`);