const {test,expect} = require ('@playwright/test')
//getbyAltText
//getByLabel
//getByPlaceholder
//getByRole
//getByTestId
//getByText
//getByTitle
//.locator

test('verify getByAltText method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele = await page.getByAltText('letcode')
    await expect(page.getByAltText('letcode')).toBeVisible()
    expect(ele).toHaveAttribute('src','../../assets/logo.png')
    expect(ele).toHaveAttribute('alt','letcode')
})

test('Verify getByLabel method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele2 = page.getByLabel('main navigation')
    await expect(page.getByLabel('main navigation')).toBeVisible()
    await expect(ele2).toHaveAttribute('role','navigation')
})

test('Verify getByPlaceholder method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    let fstName = await page.getByPlaceholder('First Name')
    expect(fstName).toBeVisible()
    expect(fstName).toHaveClass('feedback-input')
    expect(fstName).toHaveAttribute('name','first_name')
    fstName.fill('Minskole')
    await page.waitForTimeout(3000)
})

test('Verify getByRole method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let check1 = await page.getByRole('checkbox',{name:"Option 1"})
    check1.check()
    await page.waitForTimeout(3000)
    expect(check1).toBeVisible()
    expect(check1).toHaveAttribute('type','checkbox')
})

test.only('Verify getByText method in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let ele2 = await page.getByText('WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')
    await expect(ele2).toBeVisible()
    await expect(ele2).toHaveId('nav-title')
})


test('Verify getByTitle method in playwright',async({page})=>{
    await page.goto('https://letcode.in/test#google_vignette')
    let ele3 = await page.getByTitle('Koushik Chatterjee')
    await expect(ele3).toBeVisible()
    await expect(ele3).toHaveText(' Koushik Chatterjee ')
    await expect(ele3).toHaveAttribute('target','_blank')
})

// npx playwright test TC05.Locators.spec.js --headed