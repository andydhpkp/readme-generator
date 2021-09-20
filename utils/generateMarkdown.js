// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return 'https://img.shields.io/badge/license-MIT-yellow'
  }
  if (license === 'Unlicense') {
    return 'https://img.shields.io/badge/license-unlicense-green'
  }
  if (license === 'Apache 2.0') {
    return 'https://img.shields.io/badge/license-Apache%202.0-red'
  }
  if (license === 'GPLv3') {
    return 'https://img.shields.io/badge/license-GPLv3-orange'
  }
  if (license === 'BSD 3') {
    return 'https://img.shields.io/badge/license-BSD%203-blue'
  }
  if (license === 'Mozilla Public License 2.0') {
    return 'https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-brightgreen'
  }
  if (license === 'CDDL-1.0') {
    return 'https://img.shields.io/badge/license-CDDL--1.0-red'
  } 
  if (license === null) {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  if (license === 'Unlicense') {
    return 'https://opensource.org/licenses/unlicense'
  }
  if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license === 'GPLv3') {
    return 'https://opensource.org/licenses/GPL-3.0'
  }
  if (license === 'BSD 3') {
    return 'https://opensource.org/licenses/BSD-3-Clause'
  }
  if (license === 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0'
  }
  if (license === 'CDDL-1.0') {
    return 'https://opensource.org/licenses/CDDL-1.0'
  } 
  if (license === null) {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    \n\nThis application is covered under the ${license} license.`
  } else {
    return ''
  }
}

//function to display the license at the top
function renderLicense(license) {
  if (license) {
    return `[![License: ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicense(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation

  To run this application, please do the following installation:
  
  \`
  ${data.installation} 
  \`

  ## Usage

  \`
  ${data.usage}
  \`

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contribution}

  ## Tests

  To run tests, run the following:

  \`
  ${data.test}
  \`

  ## Questions

  Link to my GitHub: [${data.username}](https://github.com/${data.username}).

  Email me for any questions at: [${data.email}](mailto:${data.email}).

`;
}

module.exports = generateMarkdown;
