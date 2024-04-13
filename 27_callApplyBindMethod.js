
let person = {
    age: 25,
    city: "Nanded"
}

function greet(message, sayHello){
    console.log(message, sayHello);
}
// greet.call(person, "Good Morning", "Hey Hello");
// greet.apply(person, ["Good Morning", "Hey Hello"]);
let newFunction = greet.bind(person);
newFunction("Good Morning", "Hey Hello")