import {test, expect} from '@playwright/test'

test.beforeAll("demoqa", async ({ page }) => {
  await page.goto("https://demoqa.com/");
});

test.beforeEach("demoqa", async ({ page }) => {
  await page.goto("https://demoqa.com/elements");
});

test('buttons', async({page}) =>{
    await page.goto('https://demoqa.com/buttons')
    await page.getByRole('button',{name:'Double Click Me'}).dblclick()
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click')

    await page.getByRole('button',{name:'Right Click Me'}).click({button:'right'})
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click')

    await page.getByText('Click Me').last().click()
    await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click')
})

test('Broken Links-Images', async({page}) =>{
    await page.goto('https://demoqa.com/broken')
    const validLink = await page.getByRole('link',{name:'Click Here for Valid Link'})
    const href1 = await validLink.getAttribute('href')
    console.log('valid link url: ',href1)

    const response1 = await page.request.get(href1!)
    console.log('Response status:',response1.status())
    expect(response1.status()).toBe(200)

    const brokenLink = await page.getByRole('link',{name:'Click Here for Broken Link'})
    const href2 = await brokenLink.getAttribute('href')
    console.log('broken link url: ',href2)

    const response2 = await page.request.get(href2!)
    console.log('Response status:',response2.status())
    expect(response2.status()).toBe(500)


})