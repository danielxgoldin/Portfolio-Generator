// This will return a message if you do not want contributors 
function renderContributingSection(confirmContributers, data) {
    if (!confirmContributers) {
      return `
    I am a lone wolf... I work alone... jk... thanks for your interest. 
      `;
    } else {
      return `
    ${data}
      `;
    }
  }
  
  // This will return a license badge 
  //If there isn't one it will provide nothing. 
  function renderLicenseBadge(license) { 
    if (license !== 'no license') {
      return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
      `;
    } else {
      return ' ';
    }
  }
  
  // This will return the license link. 
  // If there is no license, it will return empty. 
  function renderLicenseLink(license) {
    if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
  }
  
  // This will return the license section of the ReadMe. 
  // If there is no license it will return empty 
  function renderLicenseSection(license) {
    if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
   }
  
   
  function renderLicenseTOC(license) {
    if (license !== 'no license') {
    return `
    * [License](#license)
      `;
    } else {
      return ' ';
    }
   }
  
  //This generates the markdown. 
  function generateMarkdown(data) {
    return `
    # ${data.title}
    
    ${renderLicenseBadge(data.license)}
    ## Table-of-Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseTOC(data.license)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## [Description](#table-of-contents)
    ${data.what}
    ${data.why}
    ${data.how}
    ## [Installation](#table-of-contents)
    ${data.installation}
    ## [Usage](#table-of-contents)
    ${data.usage}
    
    For more information on how to add screenshots for examples, visit the following website:
    
    [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
    
    ${renderLicenseSection(data.license)}
    ## [Contributing](#table-of-contents)
    
    ${renderContributingSection(data.confirmContributers, data.contribute)}
    ## [Tests](#table-of-contents)
    ${data.test}
    ## [Questions](#table-of-contents)
    Please contact me using the following links:
    [GitHub](https://github.com/${data.githubUsername})
    [Email: ${data.email}](mailto:${data.email})
  `;
  }
  
  module.exports = generateMarkdown;