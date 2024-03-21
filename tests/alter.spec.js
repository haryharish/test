import{test, expect}from '@playwright/test'
test ('alerttest',async({page})=>{

    await page.goto('http://103.211.39.135/ERP/Login.aspx')

    await page.getByPlaceholder('USERNAME/EMAIL').fill('harish.pustakala')
    await page.waitForTimeout(1000)
 await page.locator('#txtPassword').fill('12345')
    await page.locator('#btnLogin').click()
    await page.waitForTimeout(2000)
    
})