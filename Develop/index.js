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
  return `${response.name}
  ${ response.email}
  ${ response.title}
  ${ response.description}`
};


promptUser()
.then(function(response) {
  const README = generateREADME(response);

  return writeFileAsync("README.txt", README);
})
.then(function() {
  console.log("Successfully wrote to README.txt");
})
.catch(function(err) {
  console.log(err);
});


// .then(function (response) {
//     .then(function({ username }) {
//         const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//         axios.get(queryUrl).then(function(res) {
//           const repoNames = res.data.map(function(repo) {
//             return repo.name;
//           });

//           const repoNamesStr = repoNames.join("\n");

//           fs.writeFile("repos.txt", repoNamesStr, function(err) {
//             if (err) {
//               throw err;
//             }

//             console.log(`Saved ${repoNames.length} repos`);
//           });
//         });
//       });

//     var fileName = `${response.title}`
//     `${response.name}`
//    writeToFile(fileName, response);
// });



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
