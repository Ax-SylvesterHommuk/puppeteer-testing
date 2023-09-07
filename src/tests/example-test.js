module.exports = async (page) => {
    // Handle the test
    await page.goto('https://example.com');
    const expectedTitle = 'Example Domain is cool'; // This will fail
    const actualTitle = await page.title();

    // Assert the test
    if (actualTitle === expectedTitle) {
        console.log("Test Passed: Title is as expected");
    } else {
        console.error(`Test Failed: Expected title: "${expectedTitle}", Actual title: "${actualTitle}"`);
    }
};