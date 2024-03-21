import {test, expect}from '@playwright/test'

test('screenshottest', async({page})=>{

    await page.goto('https://demoblaze.com/index.html')

    await page.screenshot({path:'tests/Screenshot/'+ Date.now()+'homepage.png'})

})

test.only ('screenshot',async({page})=>{
await page.goto('https://demoblaze.com/index.html')
await page.screenshot({path:'tests/Screenshot/'+Date.now()+'fullpage.png',fullPage:true})

})

test.only('macbooktest', async({page})=>{

    await page.goto('https://demoblaze.com/index.html')
    await page.locator("//body/div[@id='contcont']/div[@class='row']/div[@class='col-lg-9']/div[@id='tbodyid']/div[1]").screenshot({path:'tests/Screenshot/'+Date.now()+'mackbook.png'})
})