const Intern = require ('../lib/Intern');

describe("intern", () => {
    
    describe("internTest", () => {

        it("Constructor Check", () =>{
            const name = "Paolo";
            const id = "4238977";
            const email = "paolo@oop.com";
            const school = "Duke University";
            const role = "Intern";

            const internDetails = new Intern (name, id, email, school);

        expect(internDetails.getName()).toEqual(name);
        expect(internDetails.getId()).toEqual(id);
        expect(internDetails.getEmail()).toEqual(email);
        expect(internDetails.getSchool()).toEqual(school);
        expect(internDetails.getRole()).toEqual(role);   


        });
    })
})