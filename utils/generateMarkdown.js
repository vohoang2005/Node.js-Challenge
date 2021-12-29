// Generate README with inputs from index.js.

function generateMarkdown(data) {
  return  `
  
# ${data.title}
# ${data.description}
# ${data.installation}
# ${data.usage}
# ${data.contribute}
# ${data.test}

# ${data.license}
# ${data.githubUsername}
# ${data.email}
# ${data.question}

`;
}

module.exports = generateMarkdown