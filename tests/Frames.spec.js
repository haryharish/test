import {test,expect}from '@playwright/test'
test ('frametest', async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

   const allframes= await page.frames()

   console.log("number of frames:",allframes.length)

  const wait=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2.html'})

  await wait.fill("//input[@name='mytext2']",'helloworld')

  await page.waitForTimeout(5000)
})