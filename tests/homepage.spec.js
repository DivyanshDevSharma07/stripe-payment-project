const { test, expect } = require('@playwright/test');
test('Homepage loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Stripe/i);
    await expect(
        page.getByRole('button', { name: /pay/i })
    ).toBeVisible();
});