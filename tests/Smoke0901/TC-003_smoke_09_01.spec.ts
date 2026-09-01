import { test, expect } from '@playwright/test';

test(
  'smoke/09/01',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-003' },
    tag: ['@QADENCE_TC_ID:TC-003'],
  },
  async ({ page }) => {


    await test.step('#01 - navigate', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('#02 - click', async () => {
      await page.getByRole("textbox", { name: "Username" }).click();
    });

    await test.step('#03 - fill', async () => {
      await page.getByRole("textbox", { name: "Username" }).fill('standard_user');
    });

    await test.step('#04 - click', async () => {
      await page.getByRole("textbox", { name: "Password" }).click();
    });

    await test.step('#05 - fill', async () => {
      await page.getByRole("textbox", { name: "Password" }).fill('secret_sauce');
    });

    await test.step('#06 - click', async () => {
      await page.getByRole("button", { name: "Login" }).click();
    });

    await test.step('#07 - click', async () => {
      await page.getByRole("link", { name: "Sauce Labs Backpack" }).nth(1).click();
    });

    await test.step('#08 - click', async () => {
      await page.locator('[data-test="inventory-item-desc"]').click();
    });

    await test.step('#09 - click', async () => {
      await page.getByRole("button", { name: "Add to cart" }).click();
    });

    await test.step('#10 - click', async () => {
      await page.getByRole("button", { name: "Open Menu" }).click();
    });

    await test.step('#11 - click', async () => {
      await page.getByRole("link", { name: "Logout" }).click();
    });

  }
);

