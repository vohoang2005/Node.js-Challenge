// Generate README with inputs from index.js.

function generateMarkdown(data) {
  return  `

# ${data.title}

## Description of the Project
### ${data.description}
<br>

## Installation Process
###  ${data.installation}
<br>

## What is the main Usage of this project?
### ${data.usage}
<br>

## How do you test this project?
### ${data.test}
<br>

## Please provide a contribution guidelines.
### ${data.contribute}
<br>

## License Usage for this project.
### ${data.license}
<br>

## Github Username
### ${data.githubUsername}
<br>

## Email Address
### ${data.email}
<br>

## Reach Out
### ${data.question}
<br>

## If you have any issue or concern, please reach out to me directly at: vohoang2005@gmail.com

`;
}

module.exports = generateMarkdown