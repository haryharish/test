import {test , expect} from '@playwright/test'
import exp from 'constants'

test ('Assertionstest',async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

    //expect page url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

    //tittle check
    await page.title('nopCommerce demo store. Register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //visible
    const Logo=page.locator("//img[@alt='nopCommerce demo store']")
    await expect(Logo).toBeVisible()

    //seach 
   const search = await page.locator('#small-searchterms')
   await expect(search).toBeEnabled()

  const checkbox= await page.locator('#gender-male')
  checkbox.click()
  await expect(checkbox).toBeChecked()

 const clicked= await page.locator('#Newsletter')
 await expect(clicked).toBeChecked()
 
const option= await page.locator('select[name="DateOfBirthMonth"] option')
await expect(option).toHaveCount(13)
})