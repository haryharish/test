import {test, expect}from '@playwright/test'

test ('calender', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

//await page.locator('#datepicker').fill('03/21/2024')

await page.locator("//a[normalize-space()='open cart']").click()

await page.waitForTimeout(2000)

await page.locator("//a[normalize-space()='open cart']").click()
await page.waitForTimeout(2000)


})