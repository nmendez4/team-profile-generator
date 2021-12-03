// intern test script
const Intern = require('../lib/intern');

// creates intern object
test('creates an intern object', () => {
    const intern = new Intern('Nicholas', '94', 'nmendez6594@gmail.com', 'UConn');

    expect(intern.school).toEqual(expect.any(String));
});

// retrieves school info from getSchool()
test('gets employee school name', () => {
    const intern = new Intern('Nicholas', '94', 'nmendez6594@gmail.com', 'UConn');

    expect(inter.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

//retrieves role from getRole()
test('get role of employee', () => {
    const intern = new Intern('Nicholas', '94', 'nmendez6594@gmail.com', 'UConn');

    expect(intern.getRole()).toEqual("Intern");
});