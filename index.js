const inquirer = require(`inquirer`);
const fs = require(`fs`);

let createIndexTemplate = (project_title, description, table_of_contents, installation, usage, licence, contributors, tests, questions, github) => {
  return `
  # Professional Readme Generator ${project_title}
  
  ## Description ${description} 
  
   A good README takes advantage of the opportunity to explain and showcase what the application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.
  
  At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.
  
  
  ## Table of Contents ${table_of_contents} (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation ${installation}
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  
  ## Usage ${usage} 
  
  Provide instructions and examples for use. Include screenshots as needed. 
  
  
  ## Credits ${github}
  
  List of collaborators, if any, with links to their GitHub profiles.
  
  Usage of third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  Tutorials that were followed, including links.
  
  
  
  ## License ${licence}
  
  The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
  
  --
  
  ## Contributing ${contributors}
  
  If you'd like to implement other developers that have contributed to the application or package. 
  
  ## Tests ${tests}
  
  Write tests for your application. Then provide examples on how to run them.
  
  ${questions}
  
  
  `;
  

}


`
# Professional Readme Generator

## Description 

 A good README takes advantage of the opportunity to explain and showcase what the application does, justify the technologies used, and even talk about some of the challenges you faced and features you hope to implement in the future. A good README helps you stand out among the large crowd of developers putting their work on GitHub.

At a minimum, your project README needs a title and a short description explaining the what, why, and how. What was your motivation? Why did you build this project? (Note: The answer is not "Because it was a homework assignment.") What problem does it solve? What did you learn? What makes your project stand out? If your project has a lot of features, consider adding a heading called "Features" and listing them here.


## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


## Usage 

Provide instructions and examples for use. Include screenshots as needed. 


## Credits

List of collaborators, if any, with links to their GitHub profiles.

Usage of third-party assets that require attribution, list the creators with links to their primary web presence in this section.

Tutorials that were followed, including links.



## License

The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)

--

## Contributing

If you'd like to implement other developers that have contributed to the application or package. 

## Tests

Write tests for your application. Then provide examples on how to run them.



`;

//console.log(template);


var questions = [
    {
    type: 'input',
    name: 'project_title',
    message: "What's your project title?",
    },
    {
    type: 'input',
    name: 'description',
    message: "What's the project description?",
    },
    {
    type: 'input',
    name: 'table_of_contents',
    message: "What's your table of contents?",
    },
    {
    type: 'input',
    name: 'installation',
    message: "What's your installation instructions?",
    },
    {
    type: 'input',
    name: 'usage',
    message: "What's your usage?",
    },
    {
    type: 'input',
    name: 'license',
    message: "What's your licence?",
    },
    {
    type: 'input',
    name: 'contributors',
    message: "Who are the contributors?",
    },
    {
    type: 'input',
    name: 'tests',
    message: "What are your tests?",
    },
    {
    type: 'input',
    name: 'questions',
    message: "What are your questions?",
    },
    {
    type: 'input',
    name: 'github',
    message: "What is your github?",
    default: "I don't have a github account",
    },
  

];


inquirer
  .prompt(questions)
  .then(answers => {
    //console.log(answers);

    const {project_title,description, table_of_contents, installation, usage, license, contributors, tests, questions, github} = answers;

    const template = createIndexTemplate(project_title, description,table_of_contents, installation, usage, license, contributors, tests, questions, github );

    fs.writeFile('README.md', template, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });



  })
  .catch(error => {
    console.log(error);
  });

