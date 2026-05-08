import { type Page, type Locator } from '@playwright/test';

export class LandingPage {
  readonly page: Page;

  readonly nav: Locator;
  readonly langSwitcherBtn: Locator;
  readonly heroHeadline: Locator;
  readonly heroCtaButton: Locator;
  readonly servicesSection: Locator;
  readonly faqSection: Locator;
  readonly faqButtons: Locator;
  readonly contactSection: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;
  readonly formSuccess: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav = page.locator('nav');
    // Use data-testid — first() handles duplicate (desktop + mobile switcher)
    this.langSwitcherBtn = page.locator('[data-testid="lang-switcher"]').first();
    this.heroHeadline = page.locator('h1');
    this.heroCtaButton = page.locator('a[href="#contact"]').first();
    this.servicesSection = page.locator('#services');
    this.faqSection = page.locator('#faq');
    this.faqButtons = page.locator('#faq button[aria-expanded]');
    this.contactSection = page.locator('#contact');
    this.nameInput = page.locator('#contact input').first();
    this.emailInput = page.locator('#contact input[type="email"]');
    this.messageInput = page.locator('#contact textarea');
    this.submitButton = page.locator('#contact button[type="submit"]');
    this.formSuccess = page.locator('[data-testid="form-success"]');
  }

  async goto(locale = 'tr') {
    await this.page.goto(`/${locale}/`);
  }

  async switchLanguage(to: 'en' | 'tr') {
    await this.langSwitcherBtn.click();
    await this.page.locator(`[data-testid="lang-option-${to}"]`).first().click();
  }

  async fillContactForm(name: string, email: string, message: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.messageInput.fill(message);
  }
}
