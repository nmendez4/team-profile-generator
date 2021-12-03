// intern import script
const employee = require('./employee');

// intern script extends employee construct
class intern extends employee {
    constructor (name, id, email, school) {
        // calls employee construct
        super (name, id, email);

        this.school = school;
    }

    //returns school from input
    getSchool() {
        return this.school;
    }

    //overrides employee role to get intern role
    getRole() {
        return "Intern";
    }
}

// to be exported into file
module.exports = intern;