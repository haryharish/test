import {test ,expect } from '@playwright/test'
test ('checkboxtest', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator("//input[@id='monday']").click()
await page.locator("//input[@id='sunday']").click()
await page.locator("//input[@id='thursday']").click()

await page.waitForTimeout(6000)

//expect(await page.locator("//input[@id='monday']")).toBeChecked()
//expect(await page.locator("//input[@id='monday']")).toBeTruthy()
await page.locator("//input[@id='monday']").uncheck()
await page.locator("//input[@id='sunday']").uncheck()

await page.waitForTimeout(5000)

expect("//input[@id='thursday']","//input[@id='sunday']").toBeTruthy()

})