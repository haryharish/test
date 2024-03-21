import{test, expect }from '@playwright/test'
import exp from 'constants'

test('doubleclicktest',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   const click= await page.locator("//button[normalize-space()='Copy Text']")

   await click.dblclick()

   await page.waitForTimeout(3000)

   const display=await page.locator('#field2')

   await expect(display).toBeTruthy()

})