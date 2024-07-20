const {test, expect}=require('@playwright/test')
test('Verify login in EZPayout',async({page})=>{
await page.goto('http://3.108.246.158/muthoot/#/log-in')
await page.locator('input[id="userName"]').fill('prasad')
await page.locator('input[id="password"]').fill('Kapital@123')
await page.locator('button[type="submit"]').click()
await expect(page.locator('g[id="Group_13537"]')).toBeVisible()
await page.waitForTimeout(3000)
//await expect (page.locator('button[id="headlessui-menu-button-2"]')).toBeVisible()

// await expect(page.locator('button[class=" flex items-center "]')).toBeVisible()
// await page.waitForTimeout(3000)
// await page.locator('[class="p-1 pl-3  flex items-center "]').click()



await page.locator('ul.mt-1').locator('li:has-text("Master Configuration")').click({ force: true });
await expect(page.getByText('New Product Setup')).toBeVisible();









//await page.locator('class="text-base font-semibold ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"]')
//.nth(7).click()
//.includes.page.locator('span[class="text-sm lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"]')
// .nth(1).click()
//await page.getByText('My Dashboard').click();
// await page.locator('span[class="text-base font-semibold ml-2 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"]').nth(7).click();
// await page.waitForTimeout(3000)
// await ('span[class="text-sm lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"]').nth(1).click();
})







// npx playwright test EZ.spec.js -- headed