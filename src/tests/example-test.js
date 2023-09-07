module.exports = async (page) => {
    // Handle the test
    await page.goto('https://example.com');
    const expectedTitle = 'Example Domain';
    const actualTitle = await page.title();

    // Assert the test
    if (actualTitle === expectedTitle) {
        console.log(`Test Passed: Title is as expected: "${expectedTitle}"`);
    } else {
        console.error(`Test Failed: Expected title: "${expectedTitle}", Actual title: "${actualTitle}"`);
    }
};