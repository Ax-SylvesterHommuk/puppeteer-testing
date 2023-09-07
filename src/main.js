const puppeteer = require('puppeteer');
const chalk = require('chalk');
const fs = require('node:fs');
const path = require('node:path');
const config = require('./config.json');

async function runTests() {
  const browser = await puppeteer.launch( { headless: config.headless } );

  const testFiles = fs.readdirSync(path.join(__dirname, 'tests'));

  for (const testFile of testFiles) {
    if (testFile.endsWith('.js')) {
      const testFilePath = path.join(__dirname, 'tests', testFile);

      if (config.verboseLogging){
        console.log(chalk.blue(`Running test from ${testFilePath}`));
      }

      const page = await browser.newPage();

      try {
        const testModule = require(testFilePath);
        if (typeof testModule === 'function') {
          await testModule(page, chalk);
        } else {
          console.log(chalk.red(`Invalid test file: ${testFilePath}`));
        }
      } catch (error) {
        console.log(chalk.red(`Error in test file ${testFilePath}: ${error}`));
      }
      await page.close();
    }
  }

  await browser.close();
}

runTests();