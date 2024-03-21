
import {test ,expect} from '@playwright/test'

test('softandhardtest',async({page})=>{

    await page.goto('https://demoblaze.com/')

    //hard 

    await expect(page).toHaveURL('https://demoblaze.com/')

    await expect(page).toHaveTitle('STORE')
    await expect(page.locator('#nava')).toBeVisible()


        //soft

        await expect.soft(page).toHaveURL('https://demoblaze.com/')

        await expect.soft(page).toHaveTitle('STtORE')
        await expect.soft(page.locator('#nava')).toBeVisible()
})