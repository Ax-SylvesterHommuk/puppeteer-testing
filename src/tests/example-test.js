module.exports = async (page, assert) => {
    // Handle the test
    await page.goto('https://example.com');
    const expectedTitle = 'Example Domain is cool'; // This will fail
    const actualTitle = await page.title();

    // Assert the test
    assert('Title check', actualTitle, expectedTitle);
};