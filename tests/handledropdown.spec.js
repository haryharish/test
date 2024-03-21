import {test, expect} from '@playwright/test'

test ('handeldropdowntest', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("#country").selectOption({label:'India'})

    await page.waitForTimeout(6000)

    await page.locator("#country").selectOption('United States')

    
})