//Both ways to import are fine.
//const { test } = require('@playwright/test');
import { test } from '@playwright/test';

//Test Case 1
test('Verify the title of the page', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    console.log('Page Title:', title);
});