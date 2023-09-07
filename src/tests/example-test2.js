module.exports = async (page, assert) => {
    await page.goto('https://example.com');

    const expectedParagraphContent = "This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.";

    const actualParagraphContent = await page.evaluate(() => {
        const paragraph = document.querySelector('p');
        return paragraph ? paragraph.innerText.trim() : '';
    });

    assert("Paragraph check", actualParagraphContent, expectedParagraphContent);
};