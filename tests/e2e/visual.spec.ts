import { test, expect } from '@playwright/test';

test.describe('Visual regression', () => {
  test('TR hero section screenshot', async ({ page }) => {
    await page.goto('/tr/');
    await page.waitForLoadState('networkidle');
    // Wait for fonts/icons to load
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('hero-tr.png', {
      clip: { x: 0, y: 0, width: 1280, height: 800 },
      threshold: 0.05,
    });
  });

  test('EN hero section screenshot', async ({ page }) => {
    await page.goto('/en/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('hero-en.png', {
      clip: { x: 0, y: 0, width: 1280, height: 800 },
      threshold: 0.05,
    });
  });

  test('mobile hero screenshot (375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/tr/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500);
    await expect(page).toHaveScreenshot('hero-mobile.png', {
      threshold: 0.05,
    });
  });

  test('services section screenshot', async ({ page }) => {
    await page.goto('/tr/');
    await page.locator('#services').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(page.locator('#services')).toHaveScreenshot('services-tr.png', {
      threshold: 0.05,
    });
  });
});
