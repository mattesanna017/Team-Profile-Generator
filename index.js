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
}