import { test, expect } from '@playwright/test';

test.beforeEach('handling dialogue', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/alerts');
});

test('handling alert', async ({ page }) => {
    page.once('dialog', async (dialog) => {
        expect(dialog.type()).toBe('alert');
        console.log('Dialog Message: ', dialog.message());
        await dialog.accept();
    });

    await page.getByRole('button', { name: 'Alert' }).click();
});

test('handling confirm', async ({ page }) => {
    page.once('dialog', async (dialog) => {
        expect(dialog.type()).toBe('confirm');
        console.log('Dialog Message: ', dialog.message());
        await dialog.accept();
    });

    await page.getByRole('button', { name: 'Confirm' }).click();
});
 
test('handling prompt', async ({ page }) => {
    page.once('dialog', async (dialog) => {
        expect(dialog.type()).toBe('prompt');
        console.log('Dialog Message: ', dialog.message());
          const enteredValue = 'Playwright Automation'
         await dialog.accept(enteredValue);
         console.log('Entered Value:', enteredValue)
    });

    await page.getByRole('button', { name: 'Prompt' }).click();

});