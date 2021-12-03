// manager import script
const employee = require('./employee');

// manager script extends employee construct
class manager extends employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    //overrides employee role to get manager role
    getRole() {
        return "Manager";
    }
}

//to be exported into file
module.exports = manager;