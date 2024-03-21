import{test, expect} from '@playwright/test'
import path from 'path'
test ('redbus',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.waitForTimeout(5000)

await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
await page.waitForTimeout(2000)
await page.locator("//button[normalize-space()='Login']").click()
await page.locator("//span[normalize-space()='PIM']").click()
await page.waitForTimeout(2000)
await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click()
await page.waitForTimeout(2000)
await page.getByText('QA Engineer').click()
await page.waitForTimeout(2000)
})