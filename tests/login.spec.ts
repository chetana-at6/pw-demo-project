import {test} from '@playwright/test'

//using locator syntax 
 test('test login1', async({page}) =>{
 await page.goto('https://practicetestautomation.com/practice-test-login/')
 await page.locator('#username').fill('student')
 await page.locator('[type ="password"]').fill('Password123')
 await page.locator('.btn').click()

})
//using user facing locator
test('test login2', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/login')
    await page.getByLabel('Username').fill('tomsmith')
    await page.getByLabel('Password').fill('SuperSecretPassword!')
    await page.getByRole('button',{name:"login"}).click()
})