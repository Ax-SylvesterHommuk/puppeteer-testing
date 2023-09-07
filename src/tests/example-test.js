module.exports = async (page, assert) => {
    // Handle the test
    await page.goto('https://example.com');
    const expectedTitle = 'Example Domain is cool'; // This will fail
    const actualTitle = await page.title();

    // Assert the test
    if (actualTitle === expectedTitle) {
        assert.OK('Title is as expected');
    } else {
        assert.FAIL('Title is not as expected', expectedTitle, actualTitle);
    }
};