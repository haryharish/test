import {test, expect}from '@playwright/test'
test ('hookstest', async({page})=>{

    await page.goto('https://demoblaze.com/')

    await page.locator('#login2').click()
    await page.locator('#loginusername').fill("pavanol")
    await page.locator('#loginpassword').fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()
    await page.waitForTimeout(5000)

    //home verify
    const verify= await page.$$('.hrefch')
    await expect(verify).toHaveLength(9)

    //logout
    await page.locator('#logout2').click()
})

test ('addtocart',async({page})=>{
//login
await page.goto('https://demoblaze.com/')

    await page.locator('#login2').click()
    await page.locator('#loginusername').fill("pavanol")
    await page.locator('#loginpassword').fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()
    await page.waitForTimeout(5000)

    //add to cart

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    await page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accepta()
    })

    // logout

    await page.locator('#logout2').click()

})