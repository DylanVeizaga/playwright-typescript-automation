import { test, expect } from '@playwright/test';

test('Google debe abrir correctamente', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Google/);
});

test('Google debe mostrar el buscador', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.locator('textarea[name="q"]')
  ).toBeVisible();
});