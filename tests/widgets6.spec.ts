import {test, expect} from '@playwright/test'

test('Accordian', async({page}) =>{
    await page.goto('https://demoqa.com/accordian')
    const firstHeader =  page.getByText('What is Lorem Ipsum?')
    const firstContent =  page.getByText('Lorem Ipsum is simply dummy text')

    await expect(firstContent).toBeVisible
    await firstHeader.click()
    await expect(firstContent).toBeHidden

    const secondHeader =  page.getByText('Where does it come from?')
    const secondContent =  page.getByText('Contrary to popular belief, Lorem Ipsum')
    const thirdHeader = page.getByText('Why do we use it?')
    const thirdContent =  page.getByText('It is a long established fact that a reader')

    await secondHeader.click()
    await expect(secondContent).toBeVisible()

    await thirdHeader.click()
    await expect(thirdContent).toBeVisible()
    await expect(secondContent).toBeHidden()
})

test('Auto Complete Multicolor', async({page}) =>{
    await page.goto('https://demoqa.com/auto-complete')
    const multiColor = page.locator('#autoCompleteMultipleInput')
    await multiColor.click()
    await multiColor.fill('red')
    await page.getByText('Red', { exact: true }).click()
    await multiColor.fill('green')
    await page.getByText('Green', { exact: true }).click()
    await page.getByRole('button',{name:'Remove Red'}).click()

    await expect(page.getByText('Green', { exact: true })).toHaveText('Green')
    

    })

test('Auto complete Array multicolor',async({page}) =>{
    await page.goto('https://demoqa.com/auto-complete')

    const colors = ['Red', 'Green', 'Blue', 'White']
    const multiColor = page.locator('#autoCompleteMultipleInput')
     for(let color of colors){
        await multiColor.fill(color)
        await page.getByText(color, { exact: true }).click()
     }
     console.log(
  await page.locator('.auto-complete__multi-value__label').allTextContents()
     )
  await expect(page.locator('.auto-complete__multi-value__label')).toHaveText(colors)

})

test('Auto Complete Single Color', async({page}) =>{
    await page.goto('https://demoqa.com/auto-complete')
    const singleColor = page.locator('#autoCompleteSingleInput')
    await singleColor.click()
    await singleColor.fill('red')
    await page.getByText('Red', { exact: true }).click()
    await expect(page.getByText('Red', { exact: true })).toContainText('Red')

})

test('datepicker', async({page}) =>{
    await page.goto('https://demoqa.com/date-picker')
    await page.locator('#datePickerMonthYearInput').click()
   
 
//page.getByLabel('Choose Saturday, August 15th, 2026').click()
//page.locator('.react-datepicker__day--015').click() //by css class

// const day = page.locator(
//   '.react-datepicker__day--015:not(.react-datepicker__day--outside-month)'
// );
// await day.click();

//await page.getByText('15', { exact: true }).click();

await page.getByRole('gridcell', { name: 'Choose Saturday, August 15th, 2026' }).click();
})


test('date and time picker', async({page}) =>{
    await page.goto('https://demoqa.com/date-picker')
    await page.locator('#dateAndTimePickerInput').click()

    const date = new Date()
    date.setDate(date.getDate() + 2)
    const expectedDate = date.getDate().toString()
    await page.locator('[class = "react-datepicker-ignore-onclickoutside"]')
 .getByText(expectedDate, { exact: true }).click()
})