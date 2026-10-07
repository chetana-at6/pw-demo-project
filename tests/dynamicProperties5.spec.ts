import {test, expect} from '@playwright/test'


test('Dynamic Properties', async({page}) =>{
    await page.goto('https://demoqa.com/dynamic-properties')
    const enableButton =  page.getByText('Will enable 5 seconds')
    const colorChange = page.getByText('Color Change')
    const visibleButton = page.getByText('Visible After 5 Seconds')

    //validation for disble button
    await expect(enableButton).toBeDisabled

    //validation for button, when button is hidden
    await expect(visibleButton).toBeHidden()

    //validation for button enables after 5sec
    await expect(enableButton).toBeEnabled({timeout: 6000})
    
    //validation for button after color change
   // await expect(colorChange).toContainClass('text-danger')
    await expect(colorChange).toHaveClass(/text-danger/)

   
    // validation for button ,visible after 5 sec
    await expect(visibleButton).toBeVisible({timeout:6000})

})
