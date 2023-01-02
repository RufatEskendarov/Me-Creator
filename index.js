// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message:
      "Welcome to the ME CREATOR it is a simple README generator! To start, please provide your first & last name:",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter your full name...");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username:",
    validate: (githubUserName) => {
      if (githubUserName) {
        return true;
      } else {
        console.log(
          "Please link to your GitHub repository so it wikk be possible to find more of your work"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
    validate: (email) => {
      if (email) {
        return true;
      } else {
        console.log("Please provide your email adress ...  ");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLinkedIn",
    message: "Would you like to include a LinkedIn page link?",
    default: false,
  },
  {
    type: "input",
    name: "linkedin",
    message: "Please enter your email address:",
    when: ({ confirmLinkedIn }) => {
      if (confirmLinkedIn) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log(
          "Project needs a title. Please provide title for  your project ..."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Pleae enter your project description:",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        console.log("Please provide a description of your project ...");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter instructions for installation?",
    validate: (installation) => {
      if (installation) {
        return true;
      } else {
        console.log(
          "Please provide installation instructions for your app ..."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Instructions for usage:",
    validate: (usage) => {
      if (usage) {
        return true;
      } else {
        console.log(
          "Instructions for usage will help users properly use your app. Please provide instructions for usage ..."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to your project?",
    validate: (contribution) => {
      if (contribution) {
        return true;
      } else {
        console.log(
          "Please provide instructions on how to contribute to your project ..."
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message:
      "Describe the tests written for your application and how to use them:",
    validate: (tests) => {
      if (tests) {
        return true;
      } else {
        console.log("Please provide test instructions for your project ...");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicenses",
    message: "Would you like to include a license?",
    default: false,
  },
  {
    type: "list",
    name: "licenses",
    message: "What type of license would you like to include?",
    choices: ["MIT", "GPL", "CC--0"],
    when: ({ confirmLicenses }) => {
      if (confirmLicenses) {
        return true;
      } else {
        return false;
      }
    },
  },
];
