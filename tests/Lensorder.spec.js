import {test, expect} from '@playwright/test'
test ('lenstest', async({page})=>{

    await page.goto('https://eyegearlens-preprod.azurewebsites.net/login')
    
await page.waitForTimeout(2000)
    await page.locator('#outlined-start-adornment-id').fill('eyegearlensOrderadmin2@eyegear.com')
    await page.locator('#outlined-adornment-password').fill('Test@@lensadmin1')
    await page.locator("//button[normalize-space()='Login']").click()
    await page.locator("div[id='row-0'] button[type='button']").click()
    await page.waitForTimeout(2000)

})