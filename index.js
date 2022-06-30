const Manager = require ('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');


let enginerAccount;
let internAccount;

questions()

function questions(){
    const inquirer = require ('inquirer');
    inquirer
    .prompt([
        {
            type:"list",
            name:"positionsList",
            message:"Pick a position",
            choices:["Manager", "Enginner", "Intern"]
        },
    ])
    .then((position) => {
        if (position.positionsList == "Manager"){
            managerQuestions (position)
        }

        if (position.positionsList == "Enginner"){
            engineerQuestions (position)
        }

        if (position.positionsList == "Intern"){
            internQuestions (position)
        }
    })

    let managerQuestions = () =>{
        inquirer
        .prompt([
            {
                type: "input",
                name:"name",
                message:"Enter your name.",
            },
            {
                type: "input",
                name:"id",
                message:"Enter your id.",
            },
            {
                type: "input",
                name:"email",
                message:"Enter your email.",
            },
            {
                type: "input",
                name:"officeNumber",
                message:"Enter your office number.",
            },
        ])
        .then ((response)=>{
            managerAccount = new Manager (response.name, response.id, response.email, response.officeNumber)
            managerHtml()
            questions.call(this)
        })
    }

    let managerAccount;

    const managerHtml = () => {
        const {name, id, email, officeNumber}= managerAccount
     
        let teamHtml = `
            <div class="team">
                <div class="card">
                    <div class="card-header">
                    <h2>${name}</h2>
                    <p>Employee ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>Office Number: ${officeNumber}</p>
                    </div>
                </div>
            </div>
            <!--managers-->`
        
        const fs = require('fs');
        fs.readFile("./dist/team.html",{encoding:'utf8', flag:'r'}, (err, data) =>
            err? console.log(err) : console.log("Manager Account has been created"));

            let newTeamHtml = data.replace("<!--managers-->", teamHtml);
     
                fs.writeFile("./dist/team.html", newTeamHtml, 'utf8', (err) =>
                err? console.log(err) : console.log("Manager Account has been rendered")
                );
    };   
    



    let engineerQuestions = () =>{
        inquirer
        .prompt([
            {
                type: "input",
                name:"name",
                message:"Enter your name.",
            },
            {
                type: "input",
                name:"id",
                message:"Enter your id.",
            },
            {
                type: "input",
                name:"email",
                message:"Enter your email.",
            },
            {
                type: "input",
                name:"github",
                message:"Enter your Github account name.",
            },
        ])
        .then ((response)=>{
            enginerAccount = new Engineer (response.name, response.id, response.email, response.github)
            engineerHtml()
            questions.call(this)
        })
    }

    let engineerAccount;

    const engineerHtml = () => {
        const {name, id, email, github}= engineerAccount
     
        let teamHtml = `
            <div class="team">
                <div class="card">
                    <div class="card-header">
                    <h2>${name}</h2>
                    <p>Employee ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>GitHub: <a href="${github}" target="_blank">${github}</a></p>
                    </div>
                </div>
            </div>
            <!--engineer-->`
        
        const fs = require('fs');
        fs.readFile("./dist/team.html",{encoding:'utf8', flag:'r'}, (err, data) =>
            err? console.log(err) : console.log("Engineer Account has been created"));

            let newTeamHtml = data.replace("<!--engineer-->", teamHtml);
     
                fs.writeFile("./dist/team.html", newTeamHtml, 'utf8', (err) =>
                err? console.log(err) : console.log("Engineer Account has been rendered")
                );
    }; 




    let internQuestions = () =>{
        inquirer
        .prompt([
            {
                type: "input",
                name:"name",
                message:"Enter your name.",
            },
            {
                type: "input",
                name:"id",
                message:"Enter your id.",
            },
            {
                type: "input",
                name:"email",
                message:"Enter your email.",
            },
            {
                type: "input",
                name:"school",
                message:"Enter your last school name.",
            },
        ])
        .then ((response)=>{
            enginerAccount = new Engineer (response.name, response.id, response.email, response.school)
            internHtml()
            questions.call(this)
        })
    }

    let internAccount;

    const internHtml = () => {
        const {name, id, email, school}= internAccount
     
        let teamHtml = `
            <div class="team">
                <div class="card">
                    <div class="card-header">
                    <h2>${name}</h2>
                    <p>Employee ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>School: ${school}</p>
                    </div>
                </div>
            </div>
            <!--intern-->`
        
        const fs = require('fs');
        fs.readFile("./dist/team.html",{encoding:'utf8', flag:'r'}, (err, data) =>
            err? console.log(err) : console.log("Intern Account has been created"));

            let newTeamHtml = data.replace("<!--intern-->", teamHtml);
     
                fs.writeFile("./dist/team.html", newTeamHtml, 'utf8', (err) =>
                err? console.log(err) : console.log("Intern Account has been rendered")
                );
    }; 

}