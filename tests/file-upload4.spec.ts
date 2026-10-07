import {test, expect} from '@playwright/test'

test('file upload', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles('C:/Users/cheta/OneDrive/Pictures/Screenshots/Screenshot (13).png')
    await page.locator('#file-submit').click()
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
})

test('file download', async({page}) =>{
    await page.goto('https://demoqa.com/upload-download')

    const waitForDownloadEvent = page.waitForEvent('download')

    await page.getByRole('button',{name:'Download'}).click()
    const download = await waitForDownloadEvent
    await download.saveAs('./'+'file download')
    
    
})

test('file upload1', async({page}) =>{
    await page.goto('https://demoqa.com/upload-download')
    await page.locator('input[type="file"]').setInputFiles('C:/Users/cheta/OneDrive/Pictures/Screenshots/Screenshot (13).png')

    await expect(page.locator('#uploadedFilePath')).toBeVisible()

     const uploadedFile = await page.locator('#uploadedFilePath').textContent();
     console.log(uploadedFile);
})
