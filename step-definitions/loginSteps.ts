// import { Given, When, Then, Before, After, World } from '@cucumber/cucumber';
// import { expect, Page, Browser, BrowserContext } from '@playwright/test';

// let browser: Browser;
// let context: BrowserContext;
// let page: Page;

// // Setup before each scenario
// Before(async function (this: World) {
//   browser = await require('playwright').chromium.launch(); // Launch the browser
//   context = await browser.newContext();  // Create a new browser context
//   page = await context.newPage();        // Create a new page in the context
// });

// // Teardown after each scenario
// After(async function () {
//   await browser.close();  // Close the browser after test execution
// });

// Given('the user is on the login page', async function () {
//   await page.goto('https://www.google.com/', { timeout: 10000 });
//   await page.waitForTimeout(5000);
// });

// When('the user enters valid credentials', async function () {
//   await page.fill('#username', 'testuser'); // Replace with actual username field selector
//   await page.fill('#password', 'password123'); // Replace with actual password field selector
//   await page.click('button[type="submit"]'); // Replace with the login button selector
// });

// Then('the user should see the dashboard', async function () {
//   await expect(page).toHaveURL('https://example.com/dashboard'); // Replace with actual dashboard URL
// });
