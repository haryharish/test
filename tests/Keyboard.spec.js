import {test,expect}from '@playwright/test'

test ('keyboardtest',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator('#name').fill("Laddu miss you ra")

await page.keyboard.press('Meta+A')
await page.keyboard.press('Meta+C')

await page.locator('#email')

await page.keyboard.press('Meta+V')

await page.waitForTimeout(2000)

})