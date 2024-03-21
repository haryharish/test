import {test, expect} from '@playwright/test'

test ('mouseovertest', async({page})=>{
   
    await page.goto('https://demo.opencart.com/')

  const  desktop= await page.locator("//a[normalize-space()='Desktops']")
  const move= await page.locator("//a[normalize-space()='Mac (1)']")
  await page.waitForTimeout(1000)

  await desktop.hover()
await move.hover()
await page.waitForTimeout(2000)


})