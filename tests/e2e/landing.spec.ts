import { test, expect } from '@playwright/test';
import { LandingPage } from './page-objects/LandingPage';

// ─── 1. Locale pages directly accessible ────────────────────────────────────
test('locale routes: /tr/ and /en/ are accessible', async ({ page }) => {
  await page.goto('/tr/');
  await expect(page).toHaveURL(/\/tr\//);

  await page.goto('/en/');
  await expect(page).toHaveURL(/\/en\//);
});

// ─── 2. TR page loads with Turkish content ───────────────────────────────────
test('TR locale: hero headline visible', async ({ page }) => {
  const landing = new LandingPage(page);
  await landing.goto('tr');
  await expect(landing.heroHeadline).toBeVisible();
  const text = await landing.heroHeadline.textContent();
  expect(text?.length).toBeGreaterThan(0);
});

// ─── 3. Language switch TR → EN (desktop only — mobile nav is behind hamburger) ──
test.describe('language switcher', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('TR → EN changes URL', async ({ page }) => {
    const landing = new LandingPage(page);
    await landing.goto('tr');
    await landing.switchLanguage('en');
    await expect(page).toHaveURL(/\/en\//);
  });
});

// ─── 4. EN locale loads without JS errors ────────────────────────────────────
test('EN locale: page renders without JS errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));

  const landing = new LandingPage(page);
  await landing.goto('en');
  await expect(landing.heroHeadline).toBeVisible();
  expect(errors).toHaveLength(0);
});

// ─── 5. Navigation anchor links present (desktop) ────────────────────────────
test.describe('desktop nav', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('nav: #services and #contact anchors visible in desktop nav', async ({ page }) => {
    await page.goto('/tr/');
    // Desktop nav links are inside hidden md:flex container — visible at 1280px
    await expect(page.locator('nav a[href="#services"]').first()).toBeVisible();
    await expect(page.locator('nav a[href="#contact"]').first()).toBeVisible();
  });
});

// ─── 6. Services section renders 6 category headings ─────────────────────────
test('services: 6 category cards visible', async ({ page }) => {
  const landing = new LandingPage(page);
  await landing.goto('tr');

  await landing.servicesSection.scrollIntoViewIfNeeded();
  const serviceHeadings = page.locator('#services h3');
  await expect(serviceHeadings).toHaveCount(6);
});

// ─── 7. FAQ accordion open/close ─────────────────────────────────────────────
test('FAQ: accordion opens on click', async ({ page }) => {
  const landing = new LandingPage(page);
  await landing.goto('tr');

  await landing.faqSection.scrollIntoViewIfNeeded();
  const firstBtn = landing.faqButtons.first();
  await expect(firstBtn).toBeVisible();

  // Initially closed
  await expect(firstBtn).toHaveAttribute('aria-expanded', 'false');

  // Open
  await firstBtn.click();
  await expect(firstBtn).toHaveAttribute('aria-expanded', 'true');

  // Answer div appears
  const answerDiv = page.locator('#faq .border-t.border-white\\/5').first();
  await expect(answerDiv).toBeVisible();

  // Close
  await firstBtn.click();
  await expect(firstBtn).toHaveAttribute('aria-expanded', 'false');
});

// ─── 8. Contact form: validation errors on empty submit ──────────────────────
test('contact form: shows validation errors on empty submit', async ({ page }) => {
  const landing = new LandingPage(page);
  await landing.goto('tr');

  await landing.contactSection.scrollIntoViewIfNeeded();
  await landing.submitButton.click();

  const errors = page.locator('#contact [id$="-error"]');
  await expect(errors.first()).toBeVisible();
});

// ─── 9. Contact form: successful fill and submit (mocked) ────────────────────
test('contact form: fills and submits successfully', async ({ page }) => {
  await page.route('**/functions/v1/seckinai-contact', (route) =>
    route.fulfill({ status: 200, body: JSON.stringify({ success: true }) })
  );

  const landing = new LandingPage(page);
  await landing.goto('tr');

  await landing.contactSection.scrollIntoViewIfNeeded();
  await landing.fillContactForm('Test Kullanıcı', 'test@example.com', 'Merhaba, test mesajı.');
  await landing.submitButton.click();

  await expect(landing.formSuccess).toBeVisible({ timeout: 5000 });
});

// ─── 10. Mobile viewport: hero and nav visible ───────────────────────────────
test('mobile 375px: hero renders correctly', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  const landing = new LandingPage(page);
  await landing.goto('tr');

  await expect(landing.heroHeadline).toBeVisible();
  await expect(landing.nav).toBeVisible();

  // Services accessible on mobile
  await landing.servicesSection.scrollIntoViewIfNeeded();
  await expect(page.locator('#services h3').first()).toBeVisible();
});
