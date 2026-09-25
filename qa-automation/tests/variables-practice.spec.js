import { test, expect } from '@playwright/test';
import { it } from 'node:test';
test ('мутация массива тестовых email', async () => {
    const testEmails = [
        'dmitriy2018samofal@gmail.com',
        'turtle@getMaxListeners.com', 
        'honey@gmail.com', 
        'abom@example.com'
    ]
    console.log ('before mutatiom', testEmails) 
    testEmails.push('another@exaple.com')
    console.log('after mutation', testEmails)
})
test ("проверка", async ({page}) => {
    const cards = await page.locator('.card').all();
    let visiblecount = 0 
    let lastVisibleIndex;
    for (let i = 0; i < cards.length; i++) {
        if (await cards[i].isVisible()) {
           
            visiblecount = i;

        }
    }
    console.log(lastVisibleIndex)

})
test ("проверкаа", async ({page}) => {
    const cards = await page.locator('.card').all();
    var visiblecount = 0 
    
    for (let i = 0; i < cards.length; i++) {
        if (await cards[i].isVisible()) {
           var lastVisibleIndex = i;
            visiblecount = i;

        }
    }
    console.log(lastVisibleIndex)
})
test ('оценка', async ({page}) => {
    await page.goto ('http://localhost:5173');
    const text = await page.getByText(/^\d+\s+recipes$/).textContent();
    const numberText = Number(text);

    console.log('текст', text);
    console.log('тип', typeof numberText);
    console.log('числа', Number.isNaN(numberText));

})