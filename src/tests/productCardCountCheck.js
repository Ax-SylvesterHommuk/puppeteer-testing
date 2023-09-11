module.exports = async (page, assert) => {
    await page.goto('http://localhost:3000');
    const productCards = await page.$$('.grid-cols-3 .border');
    const expectedProductCount = 3;
    assert('Product card count check', productCards.length, expectedProductCount);
};