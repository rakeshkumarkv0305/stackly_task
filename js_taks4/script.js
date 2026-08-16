// Level 1 — Variables & Operators
// Task 1 — Salary Calculator
let salary = 30000;
let bonus = 5000;
let tax = 2000;
 
let finalSalary = salary + bonus - tax;
 
console.log("Final Salary:", finalSalary);
 
 
// Task 2 — Predict the Output
let a = 10;
let b = a++;
let c = ++a;
 
console.log(a); // 12
console.log(b); // 10
console.log(c); // 12
 
 
// Task 3 — Logical Operators
console.log(10 > 5 && 20 < 10 || 5 === "5"); // false
console.log(10 < 5 || 20 >= 20 && 5 == "5"); // true
console.log(!(10 > 5)); // false
 
 
// Level 2 — Conditions
// Task 4 — ATM Withdrawal
let balance = 10000;
let withdrawal = 2500;
 
if (withdrawal <= 0) {
    console.log("Invalid amount: Withdrawal must be greater than 0");
} else if (withdrawal > balance) {
    console.log("Invalid amount: Insufficient balance");
} else if (withdrawal % 100 != 0) {
    console.log("Invalid amount: Withdrawal must be a multiple of 100");
} else {
    balance = balance - withdrawal;
    console.log("Remaining balance:", balance);
}
 
 
// Task 5 — Student Grade
let mark = 78;
 
if (mark >= 90 && mark <= 100) {
    console.log("A");
} else if (mark >= 80 && mark <= 89) {
    console.log("B");
} else if (mark >= 70 && mark <= 79) {
    console.log("C");
} else if (mark >= 60 && mark <= 69) {
    console.log("D");
} else if (mark < 60) {
    console.log("Fail");
} else {
    console.log("Invalid Mark");
}
 
 
// Task 6 — Nested Login
let username = "admin";
let password = "1234";
let otp = 5555;
 
if (username == "admin") {
    if (password == "1234") {
        if (otp == 5555) {
            console.log("Login successful");
        } else {
            console.log("Invalid OTP");
        }
 
    } else {
        console.log("Invalid password");
    }
} else {
    console.log("Invalid username");
}
 
 
// Level 3 — Loops
// Task 7 — Number Pattern
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
 
 
// Task 8 — Multiplication Table
let num = 7;
 
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
 
 
// Task 9 — Reverse Countdown
let count = 10;
 
while (count >= 0) {
    console.log(count);
    count--;
}
 
 
// Task 10 — OTP System
let correctOTP = 1234;
let attempts = 1;
 
while (attempts <= 3) {
    let enteredOTP = parseInt(prompt("Enter OTP:"));
 
    if (enteredOTP == correctOTP) {
        console.log("OTP verified");
        break;
    } else {
        console.log("Wrong OTP");
    }
 
    attempts++;
}
 
if (attempts > 3) {
    console.log("Account blocked");
}
 
 
// Level 4 — Arrays & Objects
// Task 11 — Array Search
let fruits = [
    "apple",
    "banana",
    "orange",
    "grapes",
    "mango"
];
 
for (let fruit of fruits) {
    console.log(fruit);
}
 
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);
 
 
// Task 12 — Object Details
let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};
 
for (let key in employee) {
    console.log(key + " : " + employee[key]);
}
 
 
// Level 5 — Functions
// Task 13 — Calculator Function
function calculator(a, b, operator) {
    if (operator == "+") {
        return a + b;
    } else if (operator == "-") {
        return a - b;
    } else if (operator == "*") {
        return a * b;
    } else if (operator == "/") {
        return a / b;
    } else if (operator == "%") {
        return a % b;
    } else {
        return "Invalid operator";
    }
}
 
console.log(calculator(20, 5, "+"));
console.log(calculator(20, 5, "-"));
console.log(calculator(20, 5, "*"));
console.log(calculator(20, 5, "/"));
console.log(calculator(20, 5, "%"));
 
 
// Task 14 — Employee Salary
function salaryDetails14(salary, bonus) {
    let finalSalary = salary + bonus;
 
    return finalSalary;
}
 
console.log(salaryDetails14(40000, 5000));
 
 
// Task 15 — Function With Default Parameter
function employeeFunc(name, role = "Trainee") {
    console.log("Name:", name);
    console.log("Role:", role);
}
 
employeeFunc("Arun");
employeeFunc("Kamal", "Developer");
 
 
// Level 6 — Advanced Functions
// Task 16 — Callback Task
function add(a, b) {
    return a + b;
}
 
function sub(a, b) {
    return a - b;
}
 
function mul(a, b) {
    return a * b;
}
 
function calculate(a, b, callback) {
    let result = callback(a, b);
    return result;
}
 
console.log(calculate(20, 10, add));
console.log(calculate(20, 10, sub));
console.log(calculate(20, 10, mul));
 
 
// Task 17 — Generator Task
function* rewards() {
    yield "₹100 Cashback";
    yield "10% Discount";
    yield "₹500 Cashback";
    yield "20% Discount";
    yield "Better Luck Next Time";
}
 
let reward = rewards();
 
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
console.log(reward.next().value);
 
 
// Level 7 — Spread / Rest / Destructuring
// Task 18 — Spread Operator
let frontend = [
    "HTML",
    "CSS",
    "JavaScript"
];
 
let backend = [
    "Node",
    "Express",
    "MongoDB"
];
 
let fullStack = [...frontend, ...backend];
 
console.log(fullStack);
 
 
// Task 19 — Array Destructuring
let student = [
    "Arun",
    "ECE",
    8.5,
    "Developer"
];
 
let [name, department, cgpa, role] = student;
 
console.log("Name:", name);
console.log("Department:", department);
console.log("CGPA:", cgpa);
console.log("Role:", role);
 
 
// Task 20 — Nested Object Destructuring
let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salary: 50000
    }
};
 
let {
    employee: {
        name: employeeName1,
        role: role1,
        salary: salary1
    }
} = company;
 
console.log("Employee Name:", employeeName1);
console.log("Role:", role1);
console.log("Salary:", salary1);
 
 
// Final Challenge — Student Management
let students = [
    {
        name: "Arun",
        department: "ECE",
        mark: 85
    },
    {
        name: "Kamal",
        department: "CSE",
        mark: 72
    },
    {
        name: "Livin",
        department: "ECE",
        mark: 92
    }
];
 
 
// 1. Print all students
function displayStudents() {
    for (let student of students) {
        let {
            name,
            department,
            mark
        } = student;
 
        console.log(
            "Name:", name,
            "Department:", department,
            "Mark:", mark
        );
    }
}
 
 
// 2. Print only ECE students
function displayECEStudents() {
    for (let student of students) {
        let {
            name,
            department,
            mark
        } = student;
 
        if (department == "ECE") {
            console.log(
                "Name:", name,
                "Department:", department,
                "Mark:", mark
            );
        }
    }
}
 
 
// 3. Find students who scored above 80
function displayStudentsAbove80() {
    for (let student of students) {
 
        let {
            name,
            mark
        } = student;
 
        if (mark > 80) {
            console.log(name + " : " + mark);
        }
    }
}
 
 
// 4. Calculate total marks
function calculateTotal() {
 
    let totalMarks = 0;
 
    for (let student of students) {
        totalMarks = totalMarks + student.mark;
    }
 
    return totalMarks;
}
 
 
// 5. Calculate average
function calculateAverage() {
 
    let totalMarks = calculateTotal();
 
    let averageMarks = totalMarks / students.length;
 
    return averageMarks;
}
 
 
// 6. Display highest mark
function displayHighestMark() {
 
    let highestMark = students[0].mark;
 
    for (let student of students) {
 
        if (student.mark > highestMark) {
            highestMark = student.mark;
        }
    }
 
    return highestMark;
}
 
 
// 7. Display lowest mark
function displayLowestMark() {
 
    let lowestMark = students[0].mark;
 
    for (let student of students) {
 
        if (student.mark < lowestMark) {
            lowestMark = student.mark;
        }
    }
 
    return lowestMark;
}
 
 
console.log("All Students");
displayStudents();
 
console.log("ECE Students");
displayECEStudents();
 
console.log("Students who scored above 80");
displayStudentsAbove80();
 
console.log("Total Marks:", calculateTotal());
 
console.log("Average:", calculateAverage());
 
console.log("Highest Mark:", displayHighestMark());
 
console.log("Lowest Mark:", displayLowestMark());