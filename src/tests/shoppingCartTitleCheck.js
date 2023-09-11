module.exports = async (page, assert) => {
    await page.goto('http://localhost:3000');
    const shoppingCartTitle = await page.$eval('header h1', (element) => element.textContent);
    const expectedCartTitle = 'Shopping Cart';
    assert('Shopping Cart title check', shoppingCartTitle, expectedCartTitle);
};