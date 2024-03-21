import {test,expect} from '@playwright/test'

test('dragtest', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

const drag= await page.locator("//p[normalize-space()='Drag me to my target']")

const drop= await page.locator("//div[@id='droppable']")

await drag.dragTo(drop)

await page.waitForTimeout(2000)

})