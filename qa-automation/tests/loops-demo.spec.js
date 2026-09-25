import {test, expect} from '@playwright/test';

test ('цикл for', async ({page}) => {
for (let i = 0; i < 10; i++){
    console.log(`проверка товара номер ${i - 1}`);
}
});
test('цикл for .. of, перебор массивов товаров', async ({page}) => {
    const productNames = ['Phone', ':Laptop', 'Tablet'];
    for (const product of productNames) {
        console.log(`тестируем добавление в корзину: ${product}`);
    }

});
test('проверка скидок для каждого тарифа', async ({page}) => {
    const priceCost = ['100', '729', '1418'];
    for (const price of priceCost) {
        const discountPrice = price * 0.9;
        console.log(`тариф ${price} EU. Со скидочкой будет ${discountPrice} EU.`);
    }
});