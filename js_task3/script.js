// Task 1 — Employee Eligibility
let employeeName = prompt("Enter employee name:");
let age = parseInt(prompt("Enter age:"));
let experience = parseInt(prompt("Enter experience:"));
let salary = parseInt(prompt("Enter salary:"));
 
if (age >= 21 && experience >= 1 && salary >= 20000) {
    console.log("Employee is eligible");
} else {
    if (age < 21) {
        console.log(`Employee is not eligible. His/Her Age is ${age}. It must be at least 21`);
    } else if (experience < 1) {
        console.log(`Employee is not eligible. His/Her Experience is ${experience}. It must be at least 1 year`);
    } else {
        console.log(`Employee is not eligible. His/Her Salary is ${salary}. It must be at least 20,000`);
    }
}
 
 
// Task 2 — ATM Withdrawal
let currentBalance = 10000;
let withdrawal = parseInt(prompt("Enter withdrawal amount:"));
 
if (withdrawal > 0 && withdrawal <= currentBalance && withdrawal % 100 == 0) {
    currentBalance = currentBalance - withdrawal;
 
    console.log("Withdrawal successful");
    console.log("Remaining balance:" + currentBalance);
} else {
    console.log("Invalid withdrawal amount");
}
 
 
// Task 3 — Login System with 3 Attempts
let correctUsername = "admin";
let correctPassword = "12345";
 
let attempts = 1;
 
while (attempts <= 3) {
 
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");
 
    if (username == correctUsername && password == correctPassword) {
        console.log("Login successful");
        break;
    } else {
        console.log("Wrong username or password");
    }
 
    attempts++;
}
 
if (attempts > 3) {
    console.log("Account locked");
}
 
 
// Task 4 — Student Grade System
let math = parseInt(prompt("Enter Math mark:"));
let english = parseInt(prompt("Enter English mark:"));
let science = parseInt(prompt("Enter Science mark:"));
let social = parseInt(prompt("Enter Social mark:"));
let computer = parseInt(prompt("Enter Computer mark:"));
 
let total = math + english + science + social + computer;
let average = total / 5;
 
let grade;
 
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}
 
console.log("Total = ", total);
console.log("Average = ", average);
console.log("Grade = ", grade);
 
 
// Task 5 — Number Pattern
 
// Pattern 1
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
 
// Pattern 2
let i = 5;
 
while (i >= 1) {
    console.log(i);
    i--;
}
 
// Pattern 3
let j = 1;
let pattern = "";
 
do {
    pattern = pattern + j + " ";
    j++;
} while (j <= 5);
 
console.log(pattern);
 
 
// Task 6 — Shopping Cart
let products = ["Laptop", "Mouse", "Keyboard", "Monitor"];
let prices = [50000, 1000, 2000, 15000];
 
let cartTotal = 0;
 
for (let i = 0; i < products.length; i++) {
    console.log(products[i] + " - ₹" + prices[i]);
 
    cartTotal = cartTotal + prices[i];
}
 
console.log("Total = ₹" + cartTotal);
 
 
// Task 7 — Employee Object
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Software Engineer",
    salary: 45000
};
 
for (let key in employee) {
    console.log(key + " : " + employee[key]);
}
 
function calculateBonus() {
    if (employee.salary >= 40000) {
        console.log("Bonus = 5000");
    } else {
        console.log("Bonus = 3000");
    }
}
 
calculateBonus();
 
 
// Task 8 — Bank Account Functions
let balance = 10000;
 
function deposit(amount) {
    balance = balance + amount;
    console.log("Deposited: ₹" + amount);
}
 
function withdraw(amount) {
    balance = balance - amount;
    console.log("Withdrawn: ₹" + amount);
}
 
function checkBalance() {
    console.log("Current Balance: ₹" + balance);
}
 
deposit(5000);
withdraw(2000);
checkBalance();
 
 
// Task 9 — Callback Calculator
function add(a, b) {
    return a + b;
}
 
function sub(a, b) {
    return a - b;
}
 
function mul(a, b) {
    return a * b;
}
 
function div(a, b) {
    return a / b;
}
 
function calculate(callback, a, b) {
    return callback(a, b);
}
 
console.log(calculate(add, 20, 10));
console.log(calculate(sub, 20, 10));
console.log(calculate(mul, 20, 10));
console.log(calculate(div, 20, 10));