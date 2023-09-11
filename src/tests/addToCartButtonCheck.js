module.exports = async (page, assert) => {
    await page.goto('http://localhost:3000');
    
    // Execute JavaScript to add items to the cart
    await page.evaluate(() => {
        addToCart(1); // Add Product 1 to the cart
        addToCart(2); // Add Product 2 to the cart
    });

    // Wait for cart items to appear
    await page.waitForSelector('#cart li');
    
    // Check if the cart contains the added products
    const cartItems = await page.$$('#cart li');
    const expectedCartItemCount = 2;
    assert('Cart item count check', cartItems.length, expectedCartItemCount);

    // Check if the cart total is updated correctly
    const cartTotal = await page.$eval('#cart-total', (element) => element.textContent);
    const expectedCartTotal = 'Total: $25.00'; // Assuming Product 1 is $10 and Product 2 is $15
    assert('Cart total check', cartTotal, expectedCartTotal);

    // Click the "Checkout" button
    await page.click('button#checkout-btn');
    
    // Check if the URL redirects to the checkout page
    const checkoutURL = page.url();
    // URL has params encoded in it like the items in the cart
    const expectedCheckoutURL = 'http://localhost:3000/checkout.html?cart=%5B%7B%22id%22%3A1%2C%22name%22%3A%22Product%201%22%2C%22price%22%3A10%7D%2C%7B%22id%22%3A2%2C%22name%22%3A%22Product%202%22%2C%22price%22%3A15%7D%5D';
    assert('Checkout URL check', checkoutURL, expectedCheckoutURL);
};