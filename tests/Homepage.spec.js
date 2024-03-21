const { test, expect } = require('@playwright/test');

test ('lauch browser',async ({page}) => {

   await page.goto('http://192.168.100.247:85/login')

   const title = await page.title();
   console.log ('page title:', title);

   await expect(title).toBe('benFCA');
  await expect(page).toHaveURL('http://192.168.100.247:85/login')


})