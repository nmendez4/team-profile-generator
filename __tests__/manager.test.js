// manager test script
const Manager = require('../lib/manager');

// creates manager object
test('creates a manager object', () => {
    const manager = new Manager('Nicholas', '94', 'nmendez6594@gmail.com', '4');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Nicholas', '94', 'nmendez6594@gmail.com', '4');

    expect(manager.getRole()).toEqual("Manager");
});