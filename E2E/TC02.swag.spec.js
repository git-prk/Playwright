const{test, expect}=require('@playwright/test')
test('Verify login on swag',async({page})=>{

    await page.goto('https://www.saucedemo.com/v1/')
    await page.locator('input[placeholder="Username"]').fill('problem_user')
    await page.locator('input[placeholder="Password"]').fill('secret_sauce')
    await page.locator('input[type="submit"]').click()
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
})