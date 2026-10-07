import { test } from '@playwright/test';

test('select date 20 august', async ({ page }) => {
  await page.goto('https://demoqa.com/date-picker');
  
  const date = new Date(2026, 7, 20);
  const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${date.getFullYear()}`;
  
  await page.locator('#datePickerMonthYearInput').fill(formattedDate);
});


