
import {test,expect} from '@playwright/test'
test ('bootstrap', async({page})=>{

await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

await page.locator("//span[@class='multiselect-selected-text']").click()


})