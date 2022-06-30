const Manager = require ('../lib/Manager');

describe("manager", () => {
    
    describe("managerTest", () => {

        it("Constructor Check", () =>{
            const name = "Jason";
            const id = "2016755";
            const email = "jason@oop.com";
            const officeNumber = "0161234567";
            const role = "Manager";

            const managerDetails = new Manager (name, id, email, officeNumber);

        expect(managerDetails.getName()).toEqual(name);
        expect(managerDetails.getId()).toEqual(id);
        expect(managerDetails.getEmail()).toEqual(email);
        expect(managerDetails.getOfficeNumber()).toEqual(officeNumber);
        expect(managerDetails.getRole()).toEqual(role);   


        });
    })
})