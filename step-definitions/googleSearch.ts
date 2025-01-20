import { Before, Given, When, Then, After } from '@cucumber/cucumber';
import { expect, Page, Browser, BrowserContext } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;
let page: Page;

// Setup before each scenario
Before(async function () {
  // Launch browser in headed mode (UI visible)
  browser = await require('playwright').chromium.launch({ headless: false }); 
  context = await browser.newContext();  // Create a new browser context
  page = await context.newPage();        // Create a new page in the context
});

// Teardown after each scenario
After(async function () {
  await browser.close();  // Close the browser after test execution
});

// Given: Navigate to Google
Given('the user is on the Google homepage', async function () {
  // Navigate to Google and wait for the search input field to be visible
  await page.goto('https://dev.quad.dev/login', { timeout: 30000 }); // 10 seconds timeout for navigation
//   await page.waitForSelector('input[name="q"]', { state: 'visible', timeout: 300000 }); 
  await page.waitForLoadState('load'); // Ensures the page has fully loaded before interacting with it
});
