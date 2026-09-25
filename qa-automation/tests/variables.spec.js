// @ts-check
import { test, expect } from '@playwright/test';
import { it } from 'node:test';

test('Переменные в JS', async ({ page }) => {
    // var oldstyle = 'первое значение var'
    // oldstyle = 'второе значение var'
    // console.log(oldstyle)

    // {
    //     var myvar = 'видно за границами блока'
    //     let myletvariable = 'видно только в блоке'
    //     console.log(myletvariable)
    // }
    // console.log(myvar)


    // const Base_URL = 'test.com' 
    // // Base_URL = 'google.com'
    // console.log(Base_URL)

});

// test ('типы данных', async ({page}) => {
//     // const url ='test.com'
//     // const count = 10 
//     // console.log(typeof url)
//     // console.log(typeof count)
//     const isvisible = true
//     console.log(typeof isvisible)
// });
test('проверка', async ({page }) => {
    let notAssigned;
    const emptyvalue = null;
    const bignumber = 3546885793709223n;
    const uniqueid = Symbol('id');
    const todoitem = {title: 'купить кофе', completed: false };

    console.log(typeof notAssigned)
    console.log(typeof emptyvalue);
    console.log(typeof bignumber);
    console.log(typeof uniqueid);
    console.log(typeof todoitem);
})
test ('пример', async ({page}) => {
    const Base_URL = 'https://demo.playwright.dev/todomvc'
    const NEW_TODO_INPUT = '.new-todo'
    let itemscount = 0 
    await page.goto(Base_URL)
    await page.locator(NEW_TODO_INPUT).fill('купить чаю')
    await page.keyboard.press ('Enter')
    itemscount = itemscount + 1
    console.log('количество прибавленых элементов', itemscount)
})