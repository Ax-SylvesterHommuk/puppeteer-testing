const puppeteer = require('puppeteer');
const chalk = require('chalk');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('./helpers/assert');
const config = require('./config.json');

async function runTests() {
  const browser = await puppeteer.launch({ headless: config.headless });

  const testFiles = fs.readdirSync(path.join(__dirname, 'tests'));

  for (const testFile of testFiles) {
    if (testFile.endsWith('.js')) {
      const testFilePath = path.join(__dirname, 'tests', testFile);

      if (config.verboseLogging) {
        console.log(chalk.blue(`Running test from ${testFilePath}`));
      }

      const page = await browser.newPage();
      const startTime = Date.now();

      try {
        const testModule = require(testFilePath);
        if (typeof testModule === 'function') {
          await testModule(page, assert);
        } else {
          console.log(chalk.red(`Invalid test file: ${testFilePath}`));
        }
      } catch (error) {
        console.log(chalk.red(`Error in test file ${testFilePath}: ${error}`));
      } finally {
        await page.close();
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        if (config.verboseLogging) {
          console.log(chalk.yellow(`Test execution time: ${elapsedTime}ms\n`));
        }
      }
    }
  }

  await browser.close();
}

runTests();