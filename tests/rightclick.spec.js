import {test,expect}from '@playwright/test'

test ('rightclicktest', async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

  const  button= await page.locator("//span[@class='context-menu-one btn btn-neutral']")

  await button.click({button:'right'})

 const move=await page.locator("//li[@class='context-menu-item context-menu-icon context-menu-icon-quit']")

 await move.hover()
 await move.click()
 await page.waitForTimeout(5000)
})