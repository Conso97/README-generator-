// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license} license](https://img.shields.io/badge/license-${license}-Red.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license !== 'None' ? `* [${license}](license)` : ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
        ` # License
  The license for this project is ${license}
  `
    )}
  else {return 'None'}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contenets
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)} 
  ${renderLicenseLink(data.license)} 
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}
    
  If you have any additional questions in regards to this file please contact me at ${data.email}.
  If you are interested in more of my work please go to my github page, my username is ${data.username}.
    
  `;}

module.exports = generateMarkdown;
