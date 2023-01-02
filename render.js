const fs = require("fs");

// Function that createss a license badge based on which license is passed in
// If there is no license, return an empty string
function createLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${createLicenseLink(
      license
    )})`;
  }
}

// Function that creates the license link
// If there is no license, return an empty string
function createLicenseLink(license) {
  if (license === "MIT") {
    return `https://lbesson.mit-license.org/`;
  }
  if (license === "GPL") {
    return `http://perso.crans.org/besson/LICENSE.html`;
  }
  if (license === "CC--0") {
    return `https://creativecommons.org/licenses/by-nd/4.0`;
  }
}

// Function that creates the license section of README
// If there is no license, return an empty string
function createLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`;
  }
}

// TODO: Create a function to generate markdown for README
function render(data) {
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ${createLicenseSection(data.licenses)}
  ${createLicenseBadge(data.licenses)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
  LinkedIn: https://www.linkedin.com/in/${
    data.linkedin.replace(" ", "-").toLowerCase
  }/


`;
}

module.exports = render;