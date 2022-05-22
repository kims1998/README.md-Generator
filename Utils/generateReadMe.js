function generateReadMe(results) {
    return `
<h1 align="center">${results.title}</h1>
  
![badge](https://img.shields.io/badge/license-${results.license}-brightgreen)<br />

## Description
🔍 ${results.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact](#contacts)

## Installation
💾 ${results.installation}

## Usage
💻 ${results.usage}

## License
![badge](https://img.shields.io/badge/license-${results.license}-brightgreen)
<br/>
This application is covered by the ${results.license} license. 

## Contributing
👪 ${results.contributors}

## Tests
✏️ ${results.test}


## Contacts
Find me on GitHub: [${results.gitHub}](https://github.com/${results.gitHub})<br/>
<br/>
Email me with any questions: ${results.email}<br/><br/>
    `;
  };
  
  module.exports = generateReadMe;