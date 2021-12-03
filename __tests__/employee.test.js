// employee test script
const Employee = require('../lib/employee');

//create the employee object
test('creates an employee object', () => {
    const employee = new Employee('Nicholas', '94', 'nmendez6594@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// retrieves name from getName()
test('gets employee name', () => {
    const employee = new Employee('Nicholas', '94', 'nmendez6594@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// retrieves id from getId()
test('gets employee ID', () => {
    const employee = new Employee('Nicholas', '94', 'nmendez6594@gmail.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

//retrieves email from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Nicholas', '94', 'nmendez6594@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// retrieves role from getRole()
test('gets employee role', () => {
    const employee = new Employee('Nicholas', '94', 'nmendez6594@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});
