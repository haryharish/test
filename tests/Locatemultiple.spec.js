
import {test,expect} from '@playwright/test'

test ('Locatemultiple',async({page})=>{

    //login url
    await page.goto('https://demoblaze.com/')

    const links=await page.$$('a');

    for(const link of links)
    {
  const linktext =await link.textContent();
  console.log(linktext);
    }

} )