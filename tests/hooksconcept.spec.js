import {test, expect}from '@playwright/test'

let page;

test.beforeAll(async({browser})=>{
    page=await browser.newPage();
    //url
    await page.goto('https://demoblaze.com/')
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill("pavanol")
    await page.locator('#loginpassword').fill("test@123")
    await page.locator("//button[normalize-space()='Log in']").click()
    await page.waitForTimeout(5000)
})
test.afterAll(async()=>{
    // logout
    await page.locator('#logout2').click()
})

test('homepagetest',async()=>{

    const count=await page.$$('.hrefch')
    await expect(count).toHaveLength(9)

})

test ('addtocart', async()=>{

    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[normalize-space()='Add to cart']").click()

    await page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accepta()
})
})