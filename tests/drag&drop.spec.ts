
import {expect, test} from '@playwright/test'

test('Drag and Drop', async ({page}) =>{
    page.goto('https://demoqa.com/droppable')
        //1
        //await page.getByLabel('Drag Me').dragTo(page.getByLabel('Drop Here'))
        
        //2
        await page.locator('#draggable').hover(),
        await page.mouse.down()
        await page.locator('#droppable').first().hover()
        await page.mouse.up()
})

test('iframe ui componenet', async ({page}) =>{
    page.goto('http://uitestingplayground.com/frames')
    
    const frameLocator1 = page.frameLocator('#frame-outer')
    await frameLocator1.getByRole('button', {name:'Click Me'}).click()

     const frameLocator2 = frameLocator1.frameLocator('#frame-inner')
    await frameLocator2.getByRole('button', {name:'Click Me'}).click()
    

})