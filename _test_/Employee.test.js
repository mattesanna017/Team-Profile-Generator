const Employee = require ('../lib/Employee');

describe("employee", () => {
    
    describe("employeeTest", () => {

        it("Constructor Check", () =>{
            const name = "Matteo";
            const id = "1905644";
            const email = "matteo@oop.com";
            const role = "Employee";

            const employeeDetails = new Employee (name, id, email);

        expect(employeeDetails.getName()).toEqual(name);
        expect(employeeDetails.getId()).toEqual(id);
        expect(employeeDetails.getEmail()).toEqual(email);
        expect(employeeDetails.getRole()).toEqual(role);   


        });
    })
})