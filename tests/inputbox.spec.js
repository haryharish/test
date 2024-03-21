import {test, expect} from '@playwright/test'

test('inputboxtest',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page.locator("//input[@placeholder='Username']")).toBeVisible()

    await expect(page.locator("//input[@placeholder='Username']")).toBeEditable()
    await expect(page.locator("//input[@placeholder='Username']")).toBeEnabled()
    await expect(page.locator("//input[@placeholder='Username']")).toBeEmpty()

    await page.fill("//input[@placeholder='Username']",'harish');
    
    await page.waitForTimeout(5000);
})