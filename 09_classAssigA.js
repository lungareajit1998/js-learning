console.log(`============================== Defining Class-01 : Vehicle ==============================`);
class Vehicle {
    company
    model
    type
    color
    price
    constructor(company,model,type,color,price){
        this.company = company
        this.model = model
        this.type = type
        this.color = color
        this.price = price
    }
    detail(){
        console.log(`Vehicle Details => Company: ${this.company}, Model: ${this.model}, Fuel Type: ${this.type}, Color: ${this.color}, Price: ${this.price}`);
    }
}
const hyundai = new Vehicle("Hyundai","Venue","Diesel","Polar White","15 Lakh");

const bike = new Vehicle("Hero","Passion Pro","Petrol","Black","1 Lakh");

const bus = new Vehicle("TATA","Starbus","EV","Blue","2.20 Cr");

const airplane = new Vehicle("Boeing","777","Jet Fuel","Aurora Silver","$375.5 million");

const train =  new Vehicle("Indian Railway","Tejas Express","Diesel","Orange","3 Cr");

console.log(hyundai);
console.log(bike);
console.log(bus);
console.log(airplane);
console.log(train);

console.log(`============================== Traversing Array ==============================`);
const array = [hyundai,bike,bus,airplane,train]
for (const element of array) {
    element.detail();
}


console.log(`============================== Defining Class-02 : College ==============================`);
class College {
    name
    establishedIn
    address
    city
    constructor(name,establishedIn,address,city){
        this.name = name
        this.establishedIn = establishedIn
        this.address = address
        this.city = city
    }
    display(){
        console.log(`College Details => Name: ${this.name}, Established In: ${this.establishedIn}, Address: ${this.address}, City: ${this.city}`);
    }
}
const yeshwant = new College ("Yeshwant College",1963,"V.I.P. Road","Nanded");
yeshwant.display();
const coep = new College("College of Engineering Pune",1854,"Wellesley Rd, Shivajinagar","Pune");
coep.display();
const kolhapur = new College("Govt College of Engineering",2023,"Hupari Rd","Kolhapur");
kolhapur.display();
const mumbai = new College("Elphinstone College",1823,"Mahatma Gandhi Rd","Mumbai");
mumbai.display();