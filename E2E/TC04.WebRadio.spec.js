const{test, expect}= require("@playwright/test")
test('Verify radio button at webuniversity', async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
await page.locator('input[value="green"]').check()
await expect (page.locator('input[value="green"]')).toBeChecked()

}
)
test('Handling checkboxes',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await expect(page.locator('input[value="option-1"]')).not.toBeChecked()
    let checkbox2 = await page.locator('input[value="option-1"]')
    checkbox2.check()
    await expect(checkbox2).toBeChecked()
})


test('Handling checked checkboxes',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    await expect(page.locator('input[value="option-3"]')).toBeChecked()
    let checkbox2 = await page.locator('input[value="option-3"]')
    checkbox2.click()
    await expect(checkbox2).not.toBeChecked()
})