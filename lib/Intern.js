const Employee = require ('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        this.schoool = school;
        super (name, id, email)
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern