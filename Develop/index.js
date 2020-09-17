const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
inquirer.registerPrompt("selectLine", require("inquirer-select-line"));

const writeFileAsync = util.promisify(fs.writeFile);

const licenseChoices = [
  {
    name: "MIT",
    link:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    name: "BSD",
    link:
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  {
    name: "GNU",
    link:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    name: "Unlicensed",
    link:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  },
];
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please choose a title.",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you contribute to this project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How is this project used?",
    },
    {
      type: "input",
      name: "name",
      message: "Please enter your username.",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project.",
    },
    {
      type: "input",
      name: "photo",
      message: "Provide a link to an image of your project being used.",
    },
    {
      type: "input",
      name: "tests",
      message: "What tests are used on this project?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your github email.",
    },
    {
      type: "input",
      name: "github",
      message: "Link your Github.",
    },
    {
      type: "selectLine",
      message: "Select a license for your project.",
      name: "license",
      choices: licenseChoices.map((item) => item.name),
    },
  ]);
}

function generateREADME(response) {
  return `
  # Title
  ${response.title}
  [Contributing](#usage)
  [usage](#name)
  [Email](#email)
  [Github](#github)
  [Description](#description)
  [Photo](#photo)
  [Tests](#tests)
  [License](#license)
  # Usage
  ${response.usage}
  # Contributing
  ${response.name}

  # Description
  ${response.description}
  # Image
  ![PHOTO](${response.photo})
  # Tests
  ${response.tests}
  # Email
  ${response.email}
  # Github
  ${response.github}
  # License
  ${licenseChoices[response.license].link}`;
}

promptUser()
  .then(function (response) {
    const README = generateREADME(response);

    return writeFileAsync("README.md", README);
  })
  .then(function () {
    console.log("Successfully wrote to README.md");
  })
  .catch(function (err) {
    console.log(err);
  });

// inquirer confirm
// LICENSING
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
