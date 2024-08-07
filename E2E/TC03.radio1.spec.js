const {test,expect} = require('@playwright/test')

test('Handling radio button in playwright',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    let radio =  page.locator('#vfb-7-3')
    await page.locator('#vfb-7-1').check()
    await expect(page.locator('#vfb-7-1')).toBeChecked()
    await expect(radio).not.toBeChecked()
    await radio.check()
    await expect(radio).toBeChecked()
})

test('Handling checkboxes in playwright',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    await expect(page.locator('#vfb-6-0')).not.toBeChecked()
    let checkbox2 = await page.locator('#vfb-6-1')
    checkbox2.check()
    await expect(checkbox2).toBeChecked()
})


test('Handling checkboxes in playwright with click method',async({page})=>{
    await page.goto('https://demo.guru99.com/test/radio.html')
    let checkbox2 = await page.locator('#vfb-6-1')
    checkbox2.check()
    await expect(checkbox2).toBeChecked()
    await checkbox2.click()
    await expect(checkbox2).toBeChecked()
})