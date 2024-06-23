// @ts-check
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

  // Wait for the share report button to be clickable and then click it
  await page.waitForSelector("(//div[@class='tools']//ga-toolbar-icon-button-component[@aria-label='Share this report']//span[@class='mat-mdc-button-touch-target'])[1]", { timeout: 60000 });
  await page.click("(//div[@class='tools']//ga-toolbar-icon-button-component[@aria-label='Share this report']//span[@class='mat-mdc-button-touch-target'])[1]");

  // Define a function to be executed at each interval
  const intervalFunction = async () => {
    // Click on the download report button 
    await page.click("(//mat-icon[normalize-space()='download'])[1]");
  };

  // Execute the intervalFunction every 5 seconds
  const intervalId = setInterval(intervalFunction, 5000);

  // Wait for the download to complete or for a certain time
  await page.waitForSelector("(//mat-icon[normalize-space()='download'])[1]", { state: 'hidden', timeout: 30000 }); // Wait for the download button to disappear

  // Clear the interval after waiting
  clearInterval(intervalId);

  //Click on the confirmation button
  await page.waitForSelector("(//div[@class='panel-button-content'])[3]");
  await page.click("(//div[@class='panel-button-content'])[3]");

  // // Download PDF
  // await page.waitForSelector("//span[normalize-space()='Download PDF']");
  // await page.click("//span[normalize-space()='Download PDF']");

  // // Wait for the download to complete (adjust the timeout as needed)
  // await page.waitForTimeout(10000);
});
