const Engineer = require ('../lib/Engineer');

describe("engineer", () => {
    
    describe("engineerTest", () => {

        it("Constructor Check", () =>{
            const name = "Domenico";
            const id = "3127866";
            const email = "domenico@oop.com";
            const github = "DomenicoBlackBlue";
            const role = "Engineer";

            const engineerDetails = new Engineer (name, id, email, github);

        expect(engineerDetails.getName()).toEqual(name);
        expect(engineerDetails.getId()).toEqual(id);
        expect(engineerDetails.getEmail()).toEqual(email);
        expect(engineerDetails.getGithub()).toEqual(github);
        expect(engineerDetails.getRole()).toEqual(role);   


        });
    })
})