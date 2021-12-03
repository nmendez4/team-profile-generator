// engineer test script
const Engineer = require('../lib/engineer');

// creates engineer object
test('creates an engineer object', () => {
    const engineer = new Engineer('Nicholas', '94', 'nmendez6594@gmail.com', 'nmendez4');

    expect(engineer.github).toEqual(expect.any(String));
});

// retrieves github from getGitHub()
test('gets engineers github name', () => {
    const engineer = new Engineer('Nicholas', '94', 'nmendez6594@gmail.com', 'nmendez4');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('Nicholas', '94', 'nmendez6594@gmail.com', 'nmendez4');

    expect(engineer.getRole()).toEqual("Engineer");
});