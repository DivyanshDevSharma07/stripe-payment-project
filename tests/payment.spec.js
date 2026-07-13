const { test, expect } = require('@playwright/test');

test('Complete Stripe payment successfully', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.locator('#pay-btn').click();
    await page.waitForURL(/checkout\.stripe\.com/);
    await page.locator('#email').fill('divyansh@example.com');
    await page.locator('#cardNumber').fill('4242424242424242');
    await page.locator('#cardExpiry').fill('1234');
    await page.locator('#cardCvc').fill('123');
    await page.locator('#billingName').fill('Divyansh Dev');
    await page.locator('[data-testid="hosted-payment-submit-button"]').click();
    await page.waitForURL(/success/);
    await expect(page.locator('body')).toContainText('Payment Successful');
});