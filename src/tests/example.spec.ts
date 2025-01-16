import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('verify the Playwright homepage using POM', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.navigateTo();
  const title = await homePage.getTitle();

  expect(title).toMatch(/Playwright/);
});
