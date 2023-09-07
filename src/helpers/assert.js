const chalk = require('chalk');

function assert(title, expected, actual) {
    if (expected === actual) {
        console.log(chalk.green(`Test Passed: ${title}\n`));
    } else {
        console.log(chalk.red(`Test Failed: ${title}`));
        console.log(chalk.gray(`Expected: ${expected}`));
        console.log(chalk.gray(`Actual: ${actual}\n`));
    }
}

module.exports = assert;