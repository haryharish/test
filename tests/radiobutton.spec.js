import {test, expect} from '@playwright/test'

test ('radiobuttontest',async({page})=>{

await page.goto('http://192.168.100.247:85/login')

//await page.locator("//input[@name='rememberMe']").check()

//await page.waitForTimeout(5000)

await page.locator("//input[@name='rememberMe']").uncheck()
await page.waitForTimeout(5000)

await expect (await page.locator("//input[@name='rememberMe']")).toBeChecked();

})
