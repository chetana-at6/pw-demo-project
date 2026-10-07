import {test, expect} from '@playwright/test'

test('validate Created link', async ({ page }) => {

    await page.goto('https://demoqa.com/links');

    // Wait for the API response
    const responsePromise = page.waitForResponse(
        response => response.url().includes('/created')
    );

    // Click Created link
    await page.getByRole('link', { name: 'Created' }).click();

    // Get the response
    const response = await responsePromise;

    // Validate status code
    expect(response.status()).toBe(201);

})

test('Bad-Request', async({page}) =>{
    await page.goto('https://demoqa.com/links')

    const pageResponse = page.waitForResponse(
        Response => Response.url().includes('/bad-request')
    )
    await page.getByRole('link',{name:'Bad Request'}).click()
    const response = await pageResponse

    expect(response.status()).toBe(400)
    //expect((await responsePromise).status()).toBe(400);

})