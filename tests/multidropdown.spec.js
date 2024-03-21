import {test,expect} from '@playwright/test'
import exp from 'constants'

test ('multidropdowntest', async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

//await page.locator('#colors',('Red','Green'))

//await page.waitForTimeout(3000)

const options =await page.$$('#colors, option')

await expect(options.length).toBe(5)
await page.waitForTimeout(5000)
})