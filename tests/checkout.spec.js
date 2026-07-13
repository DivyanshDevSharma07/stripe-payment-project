const { test, expect } = require('@playwright/test');

test('User can open Stripe Checkout', async ({ page }) => {
    await page.goto('/');
    await page.locator('#pay-btn').click();
    await page.waitForURL(/checkout\.stripe\.com/);
    await expect(page).toHaveURL(/checkout\.stripe\.com/);
});