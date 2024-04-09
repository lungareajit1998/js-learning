
let person = {
    name: "Ajit",
    city: "Nanded",
    experience: 10,
    pin: 431605
}
// Object Destructuring
// const name = person.name;
// let city = person.city;
// let myPin = person.pin;
// OR
let {name, city, pin, isMarried = false }= person;
console.log(`Name: ${name}, City: ${city}, Pin: ${pin}, Married: ${isMarried}`);

// Array Destructuring
const array = ["Jenny", "Bill", "Stew"];
// let element0 = array[0];
// let element1 = array[1];
// let element2 = array[2];
// OR
let [element0, element1, element2, element4="Elon"] = array;
console.log(`Zero: ${element0}, One: ${element1}, Two: ${element2}, Four: ${element4}`);
