const chalk = require('chalk');

function assertOK(message) {
    console.log(chalk.green(`Test Passed: ${message}\n`));
};

function assertFail(message, expected, actual) {
    console.log(chalk.red(`Test Failed: ${message}`));
    console.log(chalk.gray(`Expected: ${expected}`));
    console.log(chalk.gray(`Actual: ${actual}\n`));
};

module.exports = {
    OK: assertOK,
    FAIL: assertFail,
};