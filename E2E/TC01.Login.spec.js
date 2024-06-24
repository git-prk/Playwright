const {test,expect} = require('@playwright/test')

test('Verify login with valid credentails',async({page})=>{
  
    let dbelement = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name ="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
    await expect(dbelement).toBeVisible()
    await expect(dbelement).toHaveText('Dashboard')
    await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
    await expect(page).toHaveTitle('OrangeHRM')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

test.only('login with invalid credentials',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[placeholder="Username"]').fill('adminuser')
    await page.locator('input[placeholder="Password"]').fill('adminuser123')
    await page.locator('button[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
    //await expect(page.locator('p[data-v-87fcf455]')).toBeVisible
    await page.locator('div[class="oxd-alert oxd-alert--error"]').toBeVisible
    await expect(page.locator('p[data-v-87fcf455]')).toHaveText('Invalid credentials')
    await expect (page.locator('img[src="/web/images/ohrm_branding.png?v=1711595107870"]')).toBeVisible
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page).toHaveTitle('OrangeHRM')


})

