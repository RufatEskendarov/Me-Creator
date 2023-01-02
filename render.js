const fs = require("fs");

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

    ## Description
    ${data.description}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Credits
    ${data.credits}
    ## License
    ${data.license}
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
