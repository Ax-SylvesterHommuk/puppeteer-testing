module.exports = async (page, chalk) => {
    // Handle the test
    await page.goto('https://example.com');
    const expectedTitle = 'Example Domain is cool'; // This will fail
    const actualTitle = await page.title();

    // Assert the test
    if (actualTitle === expectedTitle) {
        console.log(chalk.green("Test Passed: Title is as expected"));
    } else {
        console.log(chalk.red(`Test Failed: Expected title: "${expectedTitle}", Actual title: "${actualTitle}"`));
    }
};