// Create a function to return a message if user doesn't want contributors
function renderContributingSection(contributeInput, data) {
    if (!contributeInput) {
      return `
    Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.
      `;
    } else {
      return `
    ${data}
      `;
    }
  }
  
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function renderLicenseBadge(license) { 
    if (license !== 'no license') {
      return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
      `;
    } else {
      return ' ';
    }
  }
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
  }
  
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'no license') {
    return `
    ## [license](#table-of-contents)
  
    The application is covered under the following license:
  
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
   }
  
// Create a function that returns license in table of contents
  function renderLicenseTOC(license) {
    if (license !== 'no license') {
    return `
    * [license](#license)
      `;
    } else {
      return ' ';
    }
   }
  
// TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `
    # ${data.title}
    
    ${renderLicenseBadge(data.license)}
  
    ## Table-of-Contents
  
    * [description](#description)
    * [installation](#installation)
    * [usage](#usage)
    ${renderLicenseTOC(data.license)}
    * [contribute](#contribute)
    * [test](#test)
    * [question](#question)
    
    ## [description](#table-of-contents)
  
    ${data.what}
  
    ${data.why}
  
    ${data.how}
  
    ## [installation](#table-of-contents)
  
    ${data.installation}
  
    ## [usage](#table-of-contents)
  
    ${data.usage}
    
    For more information on how to add screenshots for examples, visit the following website:
    
    [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
    
    ${renderLicenseSection(data.license)}
  
    ## [Contributing](#table-of-contents)
    
    ${renderContributingSection(data.contributeInput, data.contributeInput)}
  
    ## [test](#table-of-contents)
  
    ${data.test}
  
    ## [question](#table-of-contents)
  
    Please contact me using the following links:
  
    [GitHub](https://github.com/${data.githubUsername})
  
    [Email: ${data.email}](mailto:${data.email})
  `;
  }
  
  module.exports = generateMarkdown;
  