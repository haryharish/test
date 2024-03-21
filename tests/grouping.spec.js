import {test, expect}from '@playwright/test'

test.describe('group1',async()=>{
    test('groping', async({page})=>{

        console.log('miss u laddu')
    })
    
    test('groping1', async({page})=>{
    
        console.log('miss u laddu')
    }) 
})


test.describe('group2',async()=>{

test('groping2', async({page})=>{

    console.log('miss u laddu')
})

test('groping3', async({page})=>{

    console.log('miss u laddu')
})
})