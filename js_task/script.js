//1.Task 1 - Student Details
const collegeName = "Jeppiaar Engineering College";
let studentName = "Rakesh Kumar";
var studentAge = 25;
 
console.log("College Name:", collegeName);
console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
 
//Task 2 - Mobile Price
let price = 25000;
price = 27000; // Updated price
console.log("Updated Price:", price);
 
//Task 3 - Company Name
// const company = "Stackly";
// company = "Google";
// console.log(company); // Uncaught TypeError: Assignment to constant variable.
 
 
//Task 4 - Console Practice
console.log("Login Successful");
console.warn("Password is Weak");
console.error("Network Error");
 
//Task 5 - Data Types
let name = "Rakesh";
let age = 25;
let isDeveloper = true;
let uninitialized;
 
console.log("Name:", name, "-- Data Type:", typeof name);
console.log("Age:", age, "-- Data Type:", typeof age);
console.log("Are you a developer?:", isDeveloper, "-- Data Type:", typeof isDeveloper);
console.log("Uninitialized:", uninitialized, "-- Data Type:", typeof uninitialized);
 
//Task 6 - Shopping Cart Array
const cart = ["Laptop", "Mouse", "Keyboard", "Headset", "Monitor"];
 
console.log("First product:", cart[0]);
console.log("Third product:", cart[2]);
console.log("Last product:", cart[cart.length - 1]);
 
//Task 7 - Favorite Movies
let movies = [
    "Mersal",
    "Leo",
    "Master",
    "Veeram",
    "Vaali",
    "Meiyalagan"
];
 
console.log("2nd Movie:", movies[1]);
console.log("5th Movie:", movies[4]);
console.log("Last Movie:", movies[5]);
 
//Task 8 - Employee Object
let employee = {
    name: "Shiva",
    age: 24,
    department: "Software Development",
    skills: ["JavaScript", "Java", "Flutter"],
    salary: 50000
};
 
console.log("Employee Name:", employee.name);
console.log("Department:", employee.department);
console.log("First Skill:", employee.skills[0]);
console.log("Salary:", employee.salary);
 
//Task 9 - Product Details
let product = {
    productName: "Galaxy S23",
    brand: "Samsung",
    price: 65000,
    colors: ["Black", "White", "Blue"]
};
 
console.log("Brand:", product.brand);
console.log("Price:", product.price);
console.log("Second Color:", product.colors[1]);
 
//Task 10 - Arithmetic Calculator
let num1 = 20;
let num2 = 6;
 
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponent:", num1 ** num2);
 
//Task 11 - Increment Practice
let a = 5;
 
a++;
console.log("After a++:", a);
 
++a;
console.log("After ++a:", a);
 
a--;
console.log("After a--:", a);
 
--a;
console.log("After --a:", a);
 
//Task 12 - Predict the Output
let a1 = 10;
let b1 = a1++;
let c1 = ++b1;
console.log(a1); // 11
console.log(b1); // 11
console.log(c1); // 11
 
//Task 13 - Predict the Output
let x = 7;
let y = --x;
let z = y++;
 
console.log(x); //6
console.log(y); //7
console.log(z); //6
 
 
//Task 14 - School Object
let school = {
    schoolName: "Oxford Matriculation Higher Secondary School",
    principal: "Malarvizhi",
    totalStudents: 1200,
    classes: ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"]
};
 
console.log("School Name:", school.schoolName);
console.log("Principal:", school.principal);
console.log("Last Class:", school.classes[school.classes.length - 1]);
 
//Task 15 - Grocery List
let groceries = [
    "Rice",
    "Milk",
    "Bread",
    "Eggs",
    "Sugar",
    "Salt",
    "Oil",
    "Fruits"
];
 
console.log("First Item:", groceries[0]);
console.log("Fourth Item:", groceries[3]);
console.log("Last Item:", groceries[groceries.length - 1]);
 
//Task 16 - User Profile
let username = "Dinesh Kumar";
let email = "dinesh133@gmail.com";
let userAge = 32;
let isPremium = true;
 
console.log("Username:", username, "-- Data Type:", typeof username);
console.log("Email:", email, "-- Data Type:", typeof email);
console.log("Age:", userAge, "-- Data Type:", typeof userAge);
console.log("Is Premium:", isPremium, "-- Data Type:", typeof isPremium);
 
//Task 17 - Variable Rules
var val1 = 10;
let val2 = 20;
const val3 = 30;
 
//Reassignment
val1 = 100;  // Allowed
val2 = 200;  // Allowed
// val3 = 300;  // Gives Error
 
//Redeclare
var val1 = 38;  //Allowed
val1 = 80;
 
// let val2 = 200;  //Error
 
// const val3 = 400; //Error
 
//Task 18 - Marks Calculation
let tamil = 85;
let english = 90;
let maths = 95;
 
let total = tamil + english + maths;
let average = total / 3;
 
console.log("Total:", total);
console.log("Average:", average);
 
//Task 19 – Company Database
let company = {
    companyName: "Google",
    employees: ["Sundar", "John", "Priya", "Rahul"],
    location: "California",
    foundedYear: 1998,
    CEO: "Sundar Pichai"
};
 
console.log("CEO:", company.CEO);
console.log("Location:", company.location);
console.log("First Employee:", company.employees[0]);
 
//Task 20 - Mini Profile
let profile = {
    name: "Sathish",
    city: "Chennai",
    hobbies: ["Singing", "Reading", "Dancing", "Drawing"],
    age: 27
};
 
console.log("Name:", profile.name);
console.log("Second Hobby:", profile.hobbies[1]);
console.log("Age:", profile.age);
 
 