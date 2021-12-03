// employee construction script
class employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //returns name from input
    getName() {
        return this.name;
    }

    //returns id from input
    getId() {
        return this.id;
    }

    //returns email from input
    getEmail() {
        return this.email;
    }

    //returns employee job type
    getRole() {
        return 'Employee';
    }
};

// to be exported into file
module.exports = employee;