import { Page } from 'playwright';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto('https://playwright.dev/');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
