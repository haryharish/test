import {test,expect}from '@playwright/test'

test.only('getuser',async({request})=>{

    const Response =await request.get('https://dummyjson.com/products')
    console.log(await Response.json())
    //expect(Response.status()).toBe(200)


})

test('create user',async({request})=>{

    const Response =await request.post('https://dummyjson.com/products/add',
    {
        data:{"title":"Motiki Bubu","description":"bububububububub"}
        //data:{"name":"kumar","job":"trainer"},
        //headers:{"Accept":"Application/json",},
    });
        console.log( Response.json())
    //expect(Response.status()).toBe(201)

})

test('update', async({request})=>{


})

test('deleteuser', async({request})=>{


})