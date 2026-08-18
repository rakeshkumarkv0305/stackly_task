// Task 1 — Student Details
let studentName = "Rakesh";
let studentAge = 28;
let department = "CSE";
let cgpa = 8.7;
 
console.log("Name: " + studentName);
console.log("Age: " + studentAge);
console.log("Department: " + department);
console.log("CGPA: " + cgpa);
 
console.log(`Name: ${studentName}`);
console.log(`Age: ${studentAge}`);
console.log(`Department: ${department}`);
console.log(`CGPA: ${cgpa}`);
 
 
// Task 2 — Simple Calculator
let a = 20;
let b = 10;
 
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);
 
 
// Task 3 — Age Checker
let userAge = parseInt(prompt("Enter your age:"));
 
if (userAge >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}
 
 
// Level 2 — Conditions
// Task 4 — Student Grade
let studentMark = parseInt(prompt("Enter your mark:"));
 
if (studentMark >= 90 && studentMark <= 100) {
    console.log("A");
} else if (studentMark >= 80 && studentMark <= 89) {
    console.log("B");
} else if (studentMark >= 70 && studentMark <= 79) {
    console.log("C");
} else if (studentMark >= 60 && studentMark <= 69) {
    console.log("D");
} else if (studentMark < 60 && studentMark >= 0) {
    console.log("Fail");
} else {
    console.log("Invalid Mark");
}
 
 
// Task 5 — Login System
let correctUsername = "admin";
let correctPassword = "1234";
 
let enteredUsername = prompt("Enter username:");
let enteredPassword = prompt("Enter password:");
 
if (enteredUsername == correctUsername && enteredPassword == correctPassword) {
    console.log("Login successful");
} else if (enteredUsername != correctUsername && enteredPassword == correctPassword) {
    console.log("Invalid username");
} else if (enteredUsername == correctUsername && enteredPassword != correctPassword) {
    console.log("Invalid password");
} else {
    console.log("Invalid credentials");
}
 
 
// Task 6 — ATM Withdrawal
let balance = 10000;
let withdrawalAmount = parseInt(prompt("Enter withdrawal amount:"));
 
if (withdrawalAmount <= 0) {
    console.log("Invalid amount: Amount must be greater than 0");
} else if (withdrawalAmount > balance) {
    console.log("Invalid amount: Insufficient balance");
} else if (withdrawalAmount % 100 != 0) {
    console.log("Invalid amount: Amount must be a multiple of 100");
} else {
    balance = balance - withdrawalAmount;
    console.log("Remaining balance:", balance);
}
 
 
// Level 3 — Loops
// Task 7 — Multiplication Table
let tableNumber = parseInt(prompt("Enter a number:"));
 
for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}
 
 
// Task 8 — Reverse Number
let number = 12345;
let reversedNumber = 0;
 
while (number > 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = parseInt(number / 10);
}
 
console.log("Reversed Number:", reversedNumber);
 
 
// Task 9 — OTP System
let correctOTP = 1234;
let otpAttempts = 1;
 
while (otpAttempts <= 3) {
 
    let enteredOTP = parseInt(prompt("Enter OTP:"));
 
    if (enteredOTP == correctOTP) {
        console.log("OTP verified");
        break;
    } else {
        console.log("Try again");
    }
 
    otpAttempts++;
}
 
if (otpAttempts > 3) {
    console.log("Account blocked");
}
 
 
// Level 4 — Functions
// Task 10 — Salary Calculator
function calculateSalary(basicSalary, bonus) {
    return basicSalary + bonus;
}
 
console.log(calculateSalary(30000, 5000));
 
 
// Task 11 — Calculator Function
function addNumbers(a, b) {
    return a + b;
}
 
function subtractNumbers(a, b) {
    return a - b;
}
 
function multiplyNumbers(a, b) {
    return a * b;
}
 
function divideNumbers(a, b) {
    return a / b;
}
 
console.log("Addition:", addNumbers(20, 10));
console.log("Subtraction:", subtractNumbers(20, 10));
console.log("Multiplication:", multiplyNumbers(20, 10));
console.log("Division:", divideNumbers(20, 10));
 
 
// Task 12 — Eligibility Function
function checkEligibility(age, height, weight) {
 
    if (age >= 21) {
        if (height >= 170) {
            if (weight >= 70) {
                return "Eligible";
            }
        }
    }
 
    return "Not eligible";
}
 
console.log(checkEligibility(25, 175, 72));
 
 
// Level 5 — Array Practice
// Task 13 — Shopping Cart
let cart = ["Laptop", "Mouse", "Keyboard"];
 
cart.push("Monitor");
cart.splice(1, 1);
cart.unshift("Headset");
cart.pop();
 
console.log("Final Cart:", cart);
 
 
// Task 14 — Find Maximum
let numbers = [10, 45, 23, 89, 12, 67];
 
let largestNumber = numbers[0];
 
for (let number of numbers) {
    if (number > largestNumber) {
        largestNumber = number;
    }
}
 
console.log("Largest Number:", largestNumber);
 
 
// Task 15 — Remove Duplicate Values
let values = [1, 2, 3, 2, 4, 1, 5];
let uniqueValues = [];
 
for (let value of values) {
 
    if (!uniqueValues.includes(value)) {
        uniqueValues.push(value);
    }
}
 
console.log("Unique Values:", uniqueValues);
 
 
// Level 6 — Higher-Order Functions
// Task 16 — Employee Salary Filter
let salaryEmployees = [
    {
        name: "Arun",
        salary: 30000
    },
    {
        name: "Bala",
        salary: 50000
    },
    {
        name: "Kumar",
        salary: 25000
    },
    {
        name: "Ravi",
        salary: 70000
    }
];
 
let highSalaryEmployees = salaryEmployees.filter(function(employee) {
    return employee.salary >= 40000;
});
 
console.log("Employees with salary >= 40000:", highSalaryEmployees);
 
 
// Task 17 — Increase Salary
let updatedEmployees = salaryEmployees.map(function(employee) {
 
    if (employee.salary < 40000) {
        return {
            name: employee.name,
            salary: employee.salary + 5000
        };
    } else {
        return {
            name: employee.name,
            salary: employee.salary + 10000
        };
    }
});
 
console.log("Updated Employees:", updatedEmployees);
 
 
// Task 18 — Total Salary
let totalSalary = salaryEmployees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);
 
console.log("Total Salary:", totalSalary);
 
 
// Task 19 — Check Employee
let hasHighSalary = salaryEmployees.some(function(employee) {
    return employee.salary > 100000;
});
 
let allHaveMinimumSalary = salaryEmployees.every(function(employee) {
    return employee.salary >= 20000;
});
 
console.log("Anyone earning above 100000:", hasHighSalary);
console.log("Everyone earning at least 20000:", allHaveMinimumSalary);
 
 
// Interview Challenge
// Task 20 — Employee Management Mini Program
let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 35000
    },
    {
        id: 102,
        name: "Bala",
        department: "HR",
        salary: 45000
    },
    {
        id: 103,
        name: "Kumar",
        department: "IT",
        salary: 60000
    }
];
 
 
// 1. Print all employee names using forEach()
console.log("Employee Names:");
 
employees.forEach(function(employee) {
    console.log(employee.name);
});
 
 
// 2. Get only IT employees using filter()
let itEmployees = employees.filter(function(employee) {
    return employee.department == "IT";
});
 
console.log("IT Employees:", itEmployees);
 
 
// 3. Increase every salary by 10% using map()
let increasedSalaryEmployees = employees.map(function(employee) {
    return {
        id: employee.id,
        name: employee.name,
        department: employee.department,
        salary: employee.salary + (employee.salary * 10 / 100)
    };
});
 
console.log("Employees after 10% salary increase:", increasedSalaryEmployees);
 
 
// 4. Find employee with salary 45000
let employeeWithSalary = employees.find(function(employee) {
    return employee.salary == 45000;
});
 
console.log("Employee with salary 45000:", employeeWithSalary);
 
 
// 5. Calculate total salary using reduce()
let employeeTotalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);
 
console.log("Total Salary:", employeeTotalSalary);
 
 
// 6. Check whether anyone earns above 50000
let salaryAbove50000 = employees.some(function(employee) {
    return employee.salary > 50000;
});
 
console.log("Anyone earning above 50000:", salaryAbove50000);
 
 
// 7. Check whether everyone earns above 20000
let salaryAbove20000 = employees.every(function(employee) {
    return employee.salary > 20000;
});
 
console.log("Everyone earning above 20000:", salaryAbove20000);
 
 
// 8. Sort employees by salary from highest to lowest
let sortedEmployees = [...employees];
 
sortedEmployees.sort(function(a, b) {
    return b.salary - a.salary;
});
 
console.log("Employees sorted by salary:", sortedEmployees);
 
 
// 9. Destructure each employee's name and salary
console.log("Employee Name and Salary:");
 
employees.forEach(function(employee) {
 
    let {
        name,
        salary
    } = employee;
 
    console.log("Name:", name, "Salary:", salary);
});
 
 
// 10. Use spread operator to create a new employee list
let newEmployeeList = [...employees];
 
console.log("New Employee List:", newEmployeeList);