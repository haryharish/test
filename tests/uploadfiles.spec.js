import {test,expect}from '@playwright/test'

test ('uploadtest',async({page})=>{

await page.goto('http://103.211.39.135/ERP/Login.aspx')

await page.locator('#txtUsername').fill("harish.pustakala")
await page.locator('#txtPassword').fill('12345')
await page.locator('#btnLogin').click()

await page.waitForTimeout(4000)

const move= await page.locator("//a[normalize-space()='HR Management']")
const leave = await page.locator("//a[normalize-space()='Leave Management']")
await page.waitForTimeout(5000)
await move.hover()
await leave.hover()
await leave.click()
await page.waitForTimeout(4000)

const upload= await page.locator('#ContentPlaceHolder1_TabContainer1_TabPanel1_FileAttacthment')

const filepath= 'D:\Resume'
await upload.setInputFiles(filepath)
await page.waitForTimeout(2000)

})