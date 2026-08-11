//1. Variables – Student Details
let studentName = "Ram Kumar";
var studentAge = 22;
const course = "B.Tech IT";
let studentMark = 85;
 
console.log("Student Name:", studentName);
console.log("Age:", studentAge);
console.log("Course:", course);
console.log("Mark:", studentMark);
 
 
//2. User Input
let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
console.log("Name:", userName);
 
alert("Your Age: " + userAge);
 
 
//Data Types
let name1 = "Karthikeyan";
let age1 = 21;
let isDeveloper = true;
let uninitialized;
let emptyValue = null;
 
console.log("String:", name1, "-- Type:", typeof name1);
console.log("Number:", age1, "-- Type:", typeof age1);
console.log("Boolean:", isDeveloper, "-- Type:", typeof isDeveloper);
console.log("Undefined:", uninitialized, "-- Type:", typeof uninitialized);
console.log("Null:", emptyValue, "-- Type:", typeof emptyValue);
 
 
//4. Array – Shopping List
let products = [
    "Shirt",
    "Pant",
    "Shoes",
    "Watch",
    "Bag",
    "Cap"
];
 
console.log("First Product:", products[0]);
console.log("Third Product:", products[2]);
console.log("Last Product:", products[products.length - 1]);
console.log("Complete Array:", products);
 
 
//5. Object – Employee Details
let employee = {
    name: "Keerthana",
    age: 29,
    role: "Software Developer",
    salary: 50000
};
 
console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("Salary:", employee.salary);
 
 
//6. Arithmetic Operator – Bill Calculator
let price = 500;
let quantity = 3;
 
let totalPrice = price * quantity;
let discount = 100;
let finalAmount = totalPrice - discount;
 
console.log("Total Price:", totalPrice);
console.log("Discount:", discount);
console.log("Final Amount:", finalAmount);
 
 
//7. Comparison Operators
console.log(25 > 20);
console.log(15 < 10);
console.log(50 == "50");
console.log(50 === "50");
console.log(100 != "100");
console.log(100 !== "100");
 
 
//8. Logical Operators
console.log(10 > 5 && 20 > 15 || 5 > 10); //true
console.log(10 < 5 || 20 >= 20 && 5 == "5"); //true
console.log(15 === "15" || 10 > 5 && 8 < 3); //false
console.log(20 >= 20 && 5 !== "5" || 10 < 5); //true
console.log(25 < 20 || 30 == "30" && 10 >= 10); //true
 
 
//9. Ternary Operator – Login
let passwordCorrect = true;
 
console.log(
    passwordCorrect ? "Login successful" : "Invalid password"
);
 
 
//10. Type Casting – Marks
let mark1 = "80";
let mark2 = "70";
 
let total = Number(mark1) + Number(mark2);
 
console.log("Total:", total);
 
 
//11. Voting Eligibility
let voterAge = 20;
 
if (voterAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}
 
 
//12. Student Grade
let mark = 85;
 
if (mark > 100 || mark < 0) {
    console.log("Invalid Mark");
} else if (mark >= 90) {
    console.log("A Grade");
} else if (mark >= 75) {
    console.log("B Grade");
} else if (mark >= 50) {
    console.log("C Grade");
} else {
    console.log("Fail");
}
 
 
//13. Time Greeting
let time = 15;
 
if (time >= 1 && time <= 6) {
    console.log("Early Morning");
} else if (time >= 7 && time <= 12) {
    console.log("Good Morning");
} else if (time >= 13 && time <= 15) {
    console.log("Good Afternoon");
} else if (time >= 16 && time <= 19) {
    console.log("Good Evening");
} else if (time >= 20 && time <= 24) {
    console.log("Good Night");
} else {
    console.log("Invalid Time");
}
 
 
//14. Nested If – Job Eligibility
let age = 25;
let height = 175;
let weight = 64;
 
if (age >= 21) {
    if (height >= 170) {
        if (weight >= 70) {
            console.log("You are eligible for the job");
        } else {
            console.log(`You are not eligible. Your weight is ${weight}. Weight must be at least 70 kg`);
        }
    } else {
        console.log(`You are not eligible. Your height is ${height}. Height must be at least 170 cm`);
    }
} else {
    console.log(`You are not eligible. Your age is ${age}. Age must be at least 21`);
}
 
 
//15. Switch – Traffic Light
let trafficLight = "green";
 
switch (trafficLight) {
    case "red":
        console.log("Stop the vehicle");
        break;
 
    case "yellow":
        console.log("Get ready");
        break;
 
    case "green":
        console.log("Go");
        break;
 
    default:
        console.log("Invalid traffic light")
};