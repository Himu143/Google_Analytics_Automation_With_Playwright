const { test, expect } = require('@playwright/test');

test("User can download report with valid credential", async ({ page }) => {
await page.goto("https://analytics.google.com/analytics/web/?authuser=1#/p439701529/reports/intelligenthome");

  // Fill username and click Next
await page.fill('[name="identifier"]', 'toufiqulk@inneed.cloud');
await page.click("(//span[normalize-space()='Next'])[1]");

  // Fill password and click Next
await page.waitForSelector('[name="Passwd"]'); // Wait for the password field to appear
await page.fill('[name="Passwd"]', 'nasimul283206');
await page.click("(//span[normalize-space()='Next'])[1]");


// Wait for the report icon to be clickable and then click it
await page.waitForSelector("(//a[@role='link'])[2]");
await page.click("(//a[@role='link'])[2]");

 // click on Share icon button 
await page.waitForSelector("//div[@class='tools']//ga-toolbar-icon-button-component[@aria-label='Share this report']//span[@class='mat-mdc-button-touch-target']");
await page.click("//div[@class='tools']//ga-toolbar-icon-button-component[@aria-label='Share this report']//span[@class='mat-mdc-button-touch-target']")


// Click on Download file 
await page.waitForSelector("//span[normalize-space()='Download File']");
await page.click("//span[normalize-space()='Download File']");

// Click on Download PDF file 
await page.waitForSelector("//span[normalize-space()='Download PDF']");
await page.click("//span[normalize-space()='Download PDF']");
await page.waitForTimeout(8000);

});