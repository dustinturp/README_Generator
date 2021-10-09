// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// let licenseBadgeLink = ''
// test if shield link works
function renderLicenseBadge(data) {
  console.log(licenseBadge)
  console.log(licenseBadgeLink)
  if(!data.licenseBadge) {
    return "";
  }
  licenseBadgeLink = `https://img.shields.io/badge/License-${data.licenseOptions}-red`
  console.log(licenseBadge)
  console.log(licenseBadgeLink)
  return licenseBadgeLink
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink: (data) => {
  // as an object add this .renderbadge
}
//ask for link
licenseInfoLink = ""
function renderLicenseLink(data) {
  if (!data.licenseLinkInfo) {
    return "";
  } else {
    // link about license
    return ``;
  }
}

//make functions in an object. need a key for the function. 
// hold [![badmath](${licenseBadgeLink}](${data.licenseLinkInfo})) 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // let licenseBadgeLink = 'test'
  // console.log(data);
  // renderLicenseBadge(data);
  console.log("hello from gen markdown.js");
  return `
![badmath](https://img.shields.io/badge/License-${data.licenseOptions}-red](${data.licenseLinkInfo}))   

# ${data.title}


## Description
${data.description} 
  
## Table of Contents
[Description](##description)
[Installation](#installation)
[Usage Information](##<usage-information>)
[License](##license)
[Contribution Guidelines](##<contribution-guidelines>)
[Tests](##tests)


## Installation
${data.installationInstructions}

## Usage Information 
${data.usageInformation}

## License 
${data.licenseInfo}

## Contribution Guidelines
${data.contributionGuidelines}

## Tests
${data.testInstructions}

Page generated with Node JS on ${new Date()} 

`;
}

module.exports = generateMarkdown;
