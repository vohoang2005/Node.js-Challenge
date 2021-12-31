// Generate README with inputs from index.js.
// Function to return a message if user doesn't want contributors
function generateMarkdown(data) {
  return  `

# ${data.title}

## table-of-contents 

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Test](#test)
* [Contribute](#contribute)
* [License](#license)
* [Question](#question)

## [Description](#table-of-contents)
${data.description}


## [Installation](#table-of-contents)
${data.installation}


## [Usage](#table-of-contents)
${data.usage}


## [Test](#table-of-contents)
${data.test}


## [Contribute](#table-of-contents)
${data.contribute}


## [License](#table-of-contents)
${data.license}


## [Question](#table-of-contents)

You can reach me on GitHub: [GitHub](https://github.com/${data.Username})
Or contact me directly at: ${data.email}

`;
}

module.exports = generateMarkdown;