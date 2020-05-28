const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your username.",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your github email.",
    },
    {
      type: "input",
      name: "title",
      message: "Please choose a title.",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project.",
    },

    // {
    //     type: "input",
    //     name: "email",
    //     message: "What is your project title?",
    // }
  ]);
};

function generateREADME(response) {
  return `
  # This README IS BROUGHT TO YOU IN PART BY
  ![PHOTO](${response.name})
  # You can reach me at
  ${ response.email}
  # This current project is called
  ${ response.title}
  # This project is aboot 
  ${ response.description}`
};


promptUser()
.then(function(response) {
  const README = generateREADME(response);

  return writeFileAsync("README.md", README);
})
.then(function() {
  console.log("Successfully wrote to README.md");
})
.catch(function(err) {
  console.log(err);
});



// inquirer.prompt([
//     {
//     type: "list",
//     name: "toc",
//     message: "Would you like to add a section for a Table of Contents?",
//     // How to add sections using markdown. yes or no
// },
// ]);


// function styleDescription() {

// };
// function styleTOC() {

// };


// function writeToFile(fileName, data) {
//   fs.writeFile()
//   var markdown = "## Commit Early and Often One of the most" +
//     "important skills to master as a web developer is"
// }



// function init() {

// }

// init();
