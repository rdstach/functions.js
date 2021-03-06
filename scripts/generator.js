const fs = require('fs');
const path = require('path');
const funcs = require('./allfunctions');

const generated = './';
let func_generated_table = `## Methods \n\n| Method Name | Category | Description | Return Type |
| ------------| ------------| ------------| ------------|`;

const header = `![](https://github.com/theIYD/functions.js/blob/master/media/functionsjs.png)\n
# functions.js\n[![npm](https://img.shields.io/npm/v/functions.js.svg)](https://www.npmjs.com/package/functions.js) [![npm](https://img.shields.io/npm/dy/functions.js.svg)](https://www.npmjs.com/functions.js) [![Build Status](https://travis-ci.org/theIYD/functions.js.svg?branch=master)](https://travis-ci.org/theIYD/functions.js) [![GitHub stars](https://img.shields.io/github/stars/theIYD/functions.js.svg)](https://github.com/theIYD/functions.js/stargazers) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/theIYD/functions.js/pulls) [![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/theIYD/functions.js/blob/master/CONTRIBUTING.md) [![GitHub license](https://img.shields.io/github/license/theIYD/functions.js.svg)](https://github.com/theIYD/functions.js/blob/master/LICENSE)\n
> **functions.js** is a hub of various functions or methods which act differently according to their functionality.\n
 - Please feel free to contribute, read the <a href="https://github.com/theIYD/functions.js/blob/master/CONTRIBUTING.md">contributing guide</a>.
 - The code is written in ES6.\n
`;

func_generated_table += '\n';
try {

    for(let func of funcs) {
        func_generated_table += `|${func.title} |${func.topic} |${func.description} |${func.return_type} |\n`;
    }

} catch(err) {
    throw new Error(`Error : ${err}`);
}

func_generated_table += '\n';

const marked = '```';

const jscode = `const func = require('functions.js');\n\nconst algo = new func.algorithms();\nconst mathematics = new func.mathematics();\nconst strings = new func.strings();\n\nconsole.log(strings.camelize('john doe'));\n//returns 'johnDoe'\n\nconsole.log(mathematics.factorialOneLine(5));\n//returns 120\n\nconsole.log(algo.selectionSort([5,10,3,1]));\n//returns [1,3,5,10]\n\n` + marked + '\n';

const install = `## Install\n\nThe project is up on <a href="https://www.npmjs.com/functions.js">npm</a> and can be used in a project by: \n\n` + marked + `\nnpm install --save functions.js\n\n` + marked + '\n';

const usage = `## Usage\n\nBelow is an example on how to use the library into your projects.\n\n` + marked + 'js\n\n' + jscode;

const client_side_usage = `\n## Client Side\n\nThe library can be loaded as a standalone script.\n\n` + marked + 'html\n\n' + `<script type="text/javascript" src="https://unpkg.com/functions.js/umd/FJS.min.js"></script>\n<script type="text/javascript">\n\tconst algo = new FJS.algorithms();\n\tconsole.log(algo.nthLargest([5,6,9,8,4,2,1]));\n\t//=> returns 9\n</script>\n` + marked + '\n\n';

const api = `\n### Documentation\nYou can find the documentation of the package over [here](https://github.com/theIYD/functions.js/blob/master/docs/api.md)`;

const about = `\n## About\n The project is a continuation to a package previously owned by me named **<a href="https://www.npmjs.com/okay-string">okay-string</a>**. I thought of renaming it to <em>functions</em> & learn more by actually practicing functions. That's how <code>functions.js</code> was created.😍\n`;

const test = `\n## Test\n\nRun the following command:\n\n` + marked + `\nnpm run test\n\n` + marked + `\n`;

const faq = `\n## FAQ🙋\nHere are some solutions to frequently asked questions:\n\n#### Q. How to use ?\nTake a look over <a href="https://github.com/theIYD/functions.js#usage">here</a>.\n\n#### Q. Another lodash or underscore ?\nThese two libraries are industry standards & are widely used. They have a ton of great, useful functions to use in a project. There is a **difference**. functions.js was created to learn predefined methods and make something out of it by creating a new method. So i think there is no comparison between this & the other two libraries. \n\n#### Q. How do i contribute ?\nRead the guidelines mentioned <a href="https://github.com/theIYD/functions.js/blob/master/CONTRIBUTING.md">here</a>\n`;

const license = `\n## License📃\n The project is licensed under <a href="https://github.com/theIYD/functions.js/blob/master/LICENSE">MIT</a>`;
output = header + install + usage + client_side_usage + func_generated_table + api + test + about + faq + license;

const contributing_guide_header = `# Contributing ✏️\n To this project, you can contribute by sending pull requests for new functions that might solve some problem or reduce the complexity of a problem.\n`;

const contributing_guide_content = `\n### Guide for new functions\n 
-  The function should be created in <code>src/{category}/{category.js}</code>. Add the function names to the specific category class.

- While adding the functions, make sure to maintain the **alphabetical order**.

- The functions defined **should be** camelCased.

- The function should be explained above the function declaration itself with the help of **JSDOC**. 

- The code written should be preferably in **ES6** standard.

- Be sure to **test** the function before making a pull request. 

- If you have a new category to be included, feel free to make a pull request. 

`;

fs.writeFileSync(path.join(generated, 'README.md'), output, function(err) {
    console.log(err);
});

contributing_guide = contributing_guide_header + contributing_guide_content;
try {
    fs.writeFileSync(path.join(generated, 'CONTRIBUTING.md'), contributing_guide, function(err) {
        console.log(err);
    });
} catch(err) {
    throw new Error(err);
}
