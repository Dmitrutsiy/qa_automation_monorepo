import {test as base, type Page} from '@playwright/test';
import { AddRecipePage } from './pageObjects/AddRecipePage'; 
import path from 'node:path';

type Fixtures = {
  authenticatedPage: Page;
  addRecipePage: AddRecipePage;
}
export const test = base.extend<Fixtures>({
  authenticatedPage: async({browser}, use) => {
    const context = await browser.newContext({
      storageState: path.join(__dirname,
        'playwright/.auth/user.json')
    })
    const page = await context.newPage();
    await page.goto('/');
    await use(page);
    await context.close();
  },
  addRecipePage: async ({
    authenticatedPage}, use) => {
      const addRecipePage = new AddRecipePage(authenticatedPage);
      await addRecipePage.open();
      await use(addRecipePage);
    }
})