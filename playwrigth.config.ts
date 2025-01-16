import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  retries: 2,
  testDir: './src/tests',
  use: {
    browserName: 'chromium',
    headless: true,
  },
});
