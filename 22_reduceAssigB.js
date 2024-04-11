class Employee {
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
    detail(){
        console.log(`Employee Details => ID: ${this.emp_id}, Name: ${this.emp_name}, Department: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`============================== Step 1 ==============================`);
console.log(`** Find all "Wipro" employee **`);
const arrayNew = arrayEmps.filter( (currentValue)=>{
    return currentValue.emp_company=="Wipro";
} );

arrayNew.forEach( (element)=>{
    element.detail();
} );

console.log(`============================== Step 2 ==============================`);
console.log(`** "IT" or "HR" employees **`);
const arrayNew2 = arrayEmps.filter( (value) => {
    return value.emp_dept == "IT" || value.emp_dept == "HR";
});

arrayNew2.forEach( (element) => {
    element.detail();
});

console.log(`============================== Step 3 ==============================`);
console.log(`** Id's greater than "50" **`);
const arrayNew3 = arrayEmps.filter ( (id) => {
    return id.emp_id > 50;
});
arrayNew3.forEach( (element) => {
    element.detail();
});

console.log(`============================== Step 4 ==============================`);
console.log(`** Whose names starts with 'A', 'V' & 'M' **`);
const arrayNew4 = arrayEmps.filter ( (letter) => {
    return letter.emp_name.startsWith("A") || letter.emp_name.startsWith("V") || letter.emp_name.startsWith("M");
});
arrayNew4.forEach( (element) => {
    element.detail();
});

console.log(`============================== Step 5 ==============================`);
console.log(`** Find the average salary of employee form all department **`);
const arrayNew5 = arrayEmps.reduce( (runningTotal , currentValue) => {
    return sumSalary = runningTotal + currentValue.emp_salary;
},0);
console.log(`Average salary is: ${sumSalary/arrayEmps.length}`);

console.log(`============================== Step 6 ==============================`);
console.log(`** Find average salary of "IT" department **`);
const arrayNew6 = arrayEmps.filter( (department) => {
    return department.emp_dept == "IT";
})
const average = arrayNew6.reduce ( (total , value) => {
    return total + value.emp_salary; 
},0);
console.log(`Average salary of "IT" is: ${average/arrayNew6.length}`);