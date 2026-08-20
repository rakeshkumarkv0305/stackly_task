
// EMPLOYEE MANAGEMENT SYSTEM



// Employee Array
var employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2,
        skills: ["HTML", "CSS", "JavaScript"],
        joiningDate: "2022-06-15"
    },

    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 38000,
        experience: 3,
        skills: ["Recruitment", "Communication", "Excel"],
        joiningDate: "2021-08-10"
    },

    {
        id: 103,
        name: "Karthik",
        department: "Finance",
        salary: 65000,
        experience: 5,
        skills: ["Excel", "Tally", "Accounting"],
        joiningDate: "2019-04-20"
    },

    {
        id: 104,
        name: "Divya",
        department: "IT",
        salary: 85000,
        experience: 4,
        skills: ["JavaScript", "React", "Node"],
        joiningDate: "2020-01-12"
    },

    {
        id: 105,
        name: "Rahul",
        department: "Marketing",
        salary: 55000,
        experience: 2,
        skills: ["SEO", "Marketing", "Content"],
        joiningDate: "2022-09-05"
    },

    {
        id: 106,
        name: "Sneha",
        department: "IT",
        salary: 120000,
        experience: 7,
        skills: ["Java", "SQL", "Spring"],
        joiningDate: "2018-03-18"
    },

    {
        id: 107,
        name: "Vijay",
        department: "Sales",
        salary: 30000,
        experience: 1,
        skills: ["Sales", "CRM", "Communication"],
        joiningDate: "2023-02-25"
    },

    {
        id: 108,
        name: "Anitha",
        department: "HR",
        salary: 72000,
        experience: 6,
        skills: ["Management", "Recruitment", "Leadership"],
        joiningDate: "2019-11-30"
    }
];


// ========================================
// 1. DISPLAY ALL EMPLOYEES
// Using forEach()
// ========================================

function displayEmployees() {

    console.log("===== ALL EMPLOYEES =====");

    employees.forEach(function(employee) {

        console.log("--------------------------");

        console.log("ID:", employee.id);
        console.log("Name:", employee.name);
        console.log("Department:", employee.department);
        console.log("Salary: Rs.", employee.salary);
        console.log("Experience:", employee.experience, "years");
        console.log("Skills:", employee.skills);
        console.log("Joining Date:", employee.joiningDate);

        // Date
        var date = new Date(employee.joiningDate);

        console.log("Joining Year:", date.getFullYear());

        // getMonth() starts from 0
        console.log("Joining Month:", date.getMonth() + 1);

        // Salary Category
        if (employee.salary <= 30000) {

            console.log("Salary Category: Junior");

        } else if (employee.salary <= 60000) {

            console.log("Salary Category: Mid Level");

        } else {

            console.log("Salary Category: Senior");
        }
    });
}


// ========================================
// 2. FIND EMPLOYEES
// Salary greater than Rs.40,000
// Using filter()
// ========================================

function highSalaryEmployees() {

    var result = employees.filter(function(employee) {

        return employee.salary > 40000;

    });

    console.log("===== SALARY ABOVE Rs.40,000 =====");

    result.forEach(function(employee) {

        console.log(employee.name);
        console.log(employee.salary);

    });
}


// ========================================
// 3. SEARCH EMPLOYEE USING ID
// Using find()
// ========================================

function searchEmployee(id) {

    var employee = employees.find(function(employee) {

        return employee.id === id;

    });

    if (employee) {

        console.log("===== EMPLOYEE FOUND =====");

        console.log("ID:", employee.id);
        console.log("Name:", employee.name);
        console.log("Department:", employee.department);
        console.log("Salary:", employee.salary);
        console.log("Experience:", employee.experience);
        console.log("Skills:", employee.skills);

    } else {

        console.log("Employee not found");
    }
}


// ========================================
// 4. TOTAL SALARY
// Using reduce()
// ========================================

function calculateTotalSalary() {

    var total = employees.reduce(function(sum, employee) {

        return sum + employee.salary;

    }, 0);

    console.log("Total Salary = Rs." + total);
}


// ========================================
// 5. CHECK SALARY ABOVE Rs.1,00,000
// Using some()
// ========================================

function checkHighSalary() {

    var result = employees.some(function(employee) {

        return employee.salary > 100000;

    });

    if (result) {

        console.log("At least one employee has salary above Rs.1,00,000");

    } else {

        console.log("No employee has salary above Rs.1,00,000");
    }
}


// ========================================
// 6. CHECK EXPERIENCE
// Using every()
// ========================================

function checkExperience() {

    var result = employees.every(function(employee) {

        return employee.experience >= 1;

    });

    if (result) {

        console.log("Every employee has at least 1 year experience");

    } else {

        console.log("Some employees have less than 1 year experience");
    }
}


// ========================================
// 7. SORT EMPLOYEES
// Highest salary to lowest
// ========================================

function sortEmployees() {

    employees.sort(function(a, b) {

        return b.salary - a.salary;

    });

    console.log("===== SORTED EMPLOYEES =====");

    employees.forEach(function(employee) {

        console.log(
            employee.name + " - Rs." + employee.salary
        );

    });
}


// ========================================
// 8. ADD EMPLOYEE
// Using push()
// ========================================

function addEmployee() {

    var newEmployee = {

        id: 109,
        name: "Ravi",
        department: "IT",
        salary: 50000,
        experience: 2,
        skills: ["HTML", "CSS"],
        joiningDate: "2024-01-10"
    };

    employees.push(newEmployee);

    console.log("Employee added successfully");
}


// ========================================
// 9. DELETE LAST EMPLOYEE
// Using pop()
// ========================================

function deleteLastEmployee() {

    var employee = employees.pop();

    console.log(
        employee.name + " deleted successfully"
    );
}


// ========================================
// 10. ADD EMPLOYEE AT BEGINNING
// Using unshift()
// ========================================

function addEmployeeBeginning() {

    var newEmployee = {

        id: 110,
        name: "Meena",
        department: "HR",
        salary: 40000,
        experience: 2,
        skills: ["HR", "Excel"],
        joiningDate: "2024-02-15"
    };

    employees.unshift(newEmployee);

    console.log("Employee added at beginning");
}


// ========================================
// 11. DELETE FIRST EMPLOYEE
// Using shift()
// ========================================

function deleteFirstEmployee() {

    var employee = employees.shift();

    console.log(
        employee.name + " deleted successfully"
    );
}


// ========================================
// 12. OBJECT DESTRUCTURING
// ========================================

var employee = employees[0];

var name = employee.name;
var department = employee.department;
var salary = employee.salary;

console.log("===== OBJECT VALUES =====");

console.log("Name:", name);
console.log("Department:", department);
console.log("Salary:", salary);


// ========================================
// 13. ARRAY DESTRUCTURING
// ========================================

var skill1 = employee.skills[0];
var skill2 = employee.skills[1];
var skill3 = employee.skills[2];

console.log("===== EMPLOYEE SKILLS =====");

console.log(skill1);
console.log(skill2);
console.log(skill3);


// ========================================
// 14. SPREAD OPERATOR
// ========================================

var newEmployeeArray = [...employees];

console.log("New employee array created");


// ========================================
// 15. REST OPERATOR
// ========================================

function addSkills(name) {

    var skills = [];

    for (var i = 1; i < arguments.length; i++) {

        skills.push(arguments[i]);
    }

    console.log("Employee Name:", name);
    console.log("Skills:", skills);
}

addSkills(
    "Ravi",
    "HTML",
    "CSS",
    "JavaScript"
);


// ========================================
// 16. DELETE EMPLOYEE BY ID
// ========================================

function deleteEmployee(id) {

    for (var i = 0; i < employees.length; i++) {

        if (employees[i].id === id) {

            employees.splice(i, 1);

            console.log("Employee deleted successfully");

            return;
        }
    }

    console.log("Employee not found");
}


// ========================================
// 17. MENU
// ========================================

function menu() {

    var choice;

    do {

        choice = prompt(
            "EMPLOYEE MANAGEMENT SYSTEM\n\n" +
            "1. Display All Employees\n" +
            "2. Add Employee\n" +
            "3. Search Employee\n" +
            "4. Filter High Salary Employees\n" +
            "5. Calculate Total Salary\n" +
            "6. Sort By Salary\n" +
            "7. Delete Employee\n" +
            "8. Exit\n\n" +
            "Enter your choice:"
        );


        switch (choice) {

            case "1":

                displayEmployees();

                break;


            case "2":

                var id = Number(
                    prompt("Enter Employee ID:")
                );

                var name = prompt(
                    "Enter Employee Name:"
                );

                var department = prompt(
                    "Enter Department:"
                );

                var salary = Number(
                    prompt("Enter Salary:")
                );

                var experience = Number(
                    prompt("Enter Experience:")
                );

                var skills = prompt(
                    "Enter Skills separated by comma:"
                );

                var joiningDate = prompt(
                    "Enter Joining Date:"
                );


                var newEmployee = {

                    id: id,
                    name: name,
                    department: department,
                    salary: salary,
                    experience: experience,
                    skills: skills.split(","),
                    joiningDate: joiningDate
                };


                employees.push(newEmployee);

                console.log(
                    "Employee added successfully"
                );

                break;


            case "3":

                var searchId = Number(
                    prompt("Enter Employee ID:")
                );

                searchEmployee(searchId);

                break;


            case "4":

                highSalaryEmployees();

                break;


            case "5":

                calculateTotalSalary();

                break;


            case "6":

                sortEmployees();

                break;


            case "7":

                var deleteId = Number(
                    prompt("Enter Employee ID:")
                );

                deleteEmployee(deleteId);

                break;


            case "8":

                console.log(
                    "Thank you!"
                );

                break;


            default:

                console.log(
                    "Invalid choice"
                );
        }

    } while (choice !== "8");
}


// ========================================
// USER INPUT
// Search employee using ID
// ========================================

var searchId = Number(
    prompt("Enter Employee ID to search:")
);

searchEmployee(searchId);


// ========================================
// CALL FUNCTIONS
// ========================================

// Display all employees
displayEmployees();

// Employees with salary > 40000
highSalaryEmployees();

// Total salary
calculateTotalSalary();

// Check salary
checkHighSalary();

// Check experience
checkExperience();

// Sort employees
sortEmployees();


