// This is our template literal
function renderLicenseBadge(license) {
    //Built conditional, as long as the license choice is not 'none', then render the license badge
    //`![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`
    if (license !== 'none') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-green.svg)`;
    } else return '';
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Built conditional, as long as the licesnse choice is not 'none', then render the license link
  // - [License](#license)
  if (license !== 'none') {
    return "[License](#license)]"
  } else return '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //Built conditional, as long as the license choice is not 'none', then you want to render the license section
  // ## License
  if (license !== 'none') {
    return '## License'
  } else return '';
}

const markdownTemplate = (data) =>
`## ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents

  #[Description](#description)
  #[Installation](#installation)
  #[Usage](#usage)
  #[Contributing](#contributing)
  #[Contact](#contact)
  #[Questions](#questions)
  ${renderLicenseLink(data.license)}

## Description
${data.description}
## Installation
${data.installation}

## Usage
${data.usage}
## Contributing
${data.contributing}

## Contact
gghaslam@gmail.com
[Github Page](https://github.com/GayeGH)


## Questions
${renderLicenseSection(data.license)}
`;

module.exports = markdownTemplate;