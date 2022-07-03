const Manager = require ('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');





questions()

function questions(){
    const inquirer = require ('inquirer');
    inquirer
    .prompt([
        {
            type:"list",
            name:"positionsList",
            message:"Pick a position",
            choices:["Manager", "Engineer", "Intern", "Close Terminal"]
        },
    ])
    .then((position) => {
        if (position.positionsList == "Manager"){
            managerQuestions (position)
        }

        if (position.positionsList == "Engineer"){
            engineerQuestions (position)
        }

        if (position.positionsList == "Intern"){
            internQuestions (position)
        }

        if (position.positionsList == "Close Terminal"){
            return
        }
    })

    let managerQuestions = () =>{
        inquirer
        .prompt([
            {
                type: "input",
                name:"name",
                message:"Enter name.",
            },
            {
                type: "input",
                name:"id",
                message:"Enter id.",
            },
            {
                type: "input",
                name:"email",
                message:"Enter email.",
            },
            {
                type: "input",
                name:"officeNumber",
                message:"Enter office number.",
            },
        ])
        .then ((response)=>{
            managerAccount = new Manager (response.name, response.id, response.email, response.officeNumber)
            managerHtml()
            questions.call(this)
        })
    }

    let engineerQuestions = () =>{
        inquirer
        .prompt([
            {
                type: "input",
                name:"name",
                message:"Enter name.",
            },
            {
                type: "input",
                name:"id",
                message:"Enter id.",
            },
            {
                type: "input",
                name:"email",
                message:"Enter email.",
            },
            {
                type: "input",
                name:"github",
                message:"Enter Github Account Username.",
            },
        ])
        .then ((response)=>{
            engineerAccount = new Engineer (response.name, response.id, response.email, response.github)
            engineerHtml()
            questions.call(this)
        })
    }

    let internQuestions = () =>{
        inquirer
        .prompt([
            {
                type: "input",
                name:"name",
                message:"Enter name.",
            },
            {
                type: "input",
                name:"id",
                message:"Enter id.",
            },
            {
                type: "input",
                name:"email",
                message:"Enter email.",
            },
            {
                type: "input",
                name:"school",
                message:"Enter School Name.",
            },
        ])
        .then ((response)=>{
            internAccount = new Intern (response.name, response.id, response.email, response.school)
            internHtml()
            questions.call(this)
        })
    }


    let managerAccount;

    const managerHtml = () => {
        const {name, id, email, officeNumber}= managerAccount
     
        let teamHtml = `<div class="team">
        <div class="card">
            <div class="card-header">
            <h2>${name}</h2>
            <h3> Position: Manager</h3>
            <p>Employee ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>Office Number: ${officeNumber}</p>
            </div>
        </div>
    </div>
    <!--managers-->`
        
        const fs = require('fs');
        fs.readFile("./dist/team.html",{encoding:'utf8', flag:'r'}, (err, data) =>{
           if (err) {
               return console.log(err);
           }
           let newTeamHtml = data.replace("<!--managers-->", teamHtml);
    
               fs.writeFile("./dist/team.html", newTeamHtml, 'utf8', function (err) {
                   if (err) return console.log(err);
               });
           });   
    };
    

    let engineerAccount;

    const engineerHtml = () => {
        const {name, id, email, github}= engineerAccount
     
        let teamHtml =  `<div class="team">
        <div class="card">
            <div class="card-header">
            <h2>${name}</h2>
            <h3> Position: Engineer </h3>
            <p>Employee ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>GitHub: <a href="${github}" target="_blank">${github}</a></p>
            </div>
        </div>
    </div>
    <!--engineer-->`
        
        const fs = require('fs');
        fs.readFile("./dist/team.html",{encoding:'utf8', flag:'r'}, (err, data) =>{
            if (err) {
                return console.log(err);
            }
            let newTeamHtml = data.replace("<!--engineer-->", teamHtml);
        
                fs.writeFile("./dist/team.html", newTeamHtml, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });   
    };

    
    let internAccount;

    const internHtml = () => {
        const {name, id, email, school}= internAccount
     
        let teamHtml = `<div class="team">
        <div class="card">
            <div class="card-header">
            <h2>${name}</h2>
            <h3> Position: Intern </h3>
            <p>Employee ID: ${id}</p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <p>School: ${school}</p>
            </div>
        </div>
    </div>
    <!--intern-->`
        
        const fs = require('fs');
        fs.readFile("./dist/team.html",{encoding:'utf8', flag:'r'}, (err, data) =>{
            if (err) {
                return console.log(err);
            }
            let newTeamHtml = data.replace("<!--intern-->", teamHtml);
            
                fs.writeFile("./dist/team.html", newTeamHtml, 'utf8', function (err) {
                    if (err) return console.log(err);
                });
            });
    }  
}

