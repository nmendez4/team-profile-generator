// engineer import script
const employee = require('./employee');

// engineer script extends employee construct
class engineer extends employee {
    constructor (name, id, email, github) {
        // calls employee constructor
        super (name, id, email);

        this.github = github;
    }

    // returns github from input
    getGitHub() {
        return this.github;
    }

    // overrides employee role to get engineer role
    getRole() {
        return "Engineer";
    }

}

// to be exported into file
module.exports = engineer;