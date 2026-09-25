
const{test, expect} = require('@playwright/test');
test('if/else конструкция', async ({page}) => {
const USER_age = 19;
if (USER_age === 18) {
    console.log('поздравляем с совершеннолетием');
} else if (USER_age < 18 ){
console.log('подрости');
} else {
    console.log('заходи');
}
});
test('операторы сравнения', async({page}) => {
    console.log(18 === 18); //true
    console.log(18 === '18'); //false
});
test('проверка за возрастом и согласием', async ({page}) => {
    const USER_age = 18;
    const hasAgreedToTerms = true;
    const isEligible = USER_age >= 18 && hasAgreedToTerms
    if (isEligible) {
        console.log('заходи кабан');
    } else {
        console.log('кабанчикам низя')
    }
});
test('проверка', async ({page}) => {
    await page.goto('/');
    const text = await page.locator('[class^="_recipeCount_"]').textContent();
    console.log(text);
    console.log(typeof text);
    const count = Number(text.match(/\d+/)[0]);
    console.log(count);
    console.log(typeof count);
    if (count === 5){
        console.log(true);
    }else if (count > 5) {
        console.log(false);
    }else {
        console.log(false);
    }
});
test('проверка категорий', async ({page}) => {
    await page.goto('/');
    const category = 'Dessert';
    let categoryFilter;
    if (category === 'Dessert' || category === 'Chicken') {
        categoryFilter = category;
    }else {
        categoryFilter = 'all'
    }
    })