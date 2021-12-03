// page creation
const generateHTML = require('./src/generateHTML');

// team profile
const Manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

// required node programs
const fs = require('fs');
const inquirer = require('inquirer');

// team array
const teamArray = [];

// begins the add manager prompt
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Who is the manager of this team?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }    
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's ID code:",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log("Please enter the manager's ID code!");
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email address:",
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log("Please enter an email!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number:",
        validate: nameInput => {
            if (isNaN(nameInput)) {
                console.log('Please enter an office number!');
                return false;
            } else {
                return true;
            }
        }
    }
])
.then(managerInput => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager (name, id , email, officeNumber);

    teamArray.push(manager);
    console.log(manager);
})
};

// begins the add employee prompt
const addEmployee = () => {
    console.log(`
    ===============================
    Adding employee(s) to the team!
    ===============================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose the employee's role:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID code:",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the employee's ID code!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email address:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter an email address!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's GitHub username:",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's GitHub username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school:",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add any other team members?",
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new engineer (name, id, email, github);

            console.log(employee);
        } else if (role === "Intern") {
            employee = new intern (name, id, email, school);

            console.log(employee);
        } 

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

// function to generate the HTML page using the data logged and the fs (file system)
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // error statement
        if (err) {
            console.log(err)
            return;
        } else {
            console.log("Your team profile has been built successfully! Check index.html to see the results")
        }
    })
};

// adds manager, then employees following, which generates the HTML and writes the data to the file
// if err, console.log will throw err
addManager()
.then(addEmployee)
.then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});