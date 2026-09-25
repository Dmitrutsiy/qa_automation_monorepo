import {test} from '@playwright/test';

test ('тестовые данные для проверки логина', async () => {
    const testEmails = ['',
        'ytka.gmail.com', 
        'burger.lover@gmail.com', 
        '', 
        'chip@gmail.com'
    ];
    console.log(testEmails)
    let checksPassed = 0; // почему let? потому что значение let мы можем поменять в отличие от const
    testEmails.push('believeme@ytka.zub');
    console.log(testEmails);
});
test ('проверка количества найденых рецептов', async () => {
    const recipesFoundText = ('12');
    const t = Number(recipesFoundText);
    console.log(12 === t)
    if (t === 0){
        console.log('не нашли');
    }else if (t === 12){
        console.log (`найдено ожидаемое количество: ${t} `);
    }else{
        console.log('найдено иное количество');
    }
    const recipeAuthor = null;
    const m = recipeAuthor || 'автор неизвестный'; 
    console.log(m);
});
test ('перебор email через continue и break', async () => {
    let checksPassed = 0; // пройдено, создал новую checksPassed потому что переменная из другого теста недоступна тут
                        // она имеет локальную область видимости и существует только внутри своего test
    let skip = 0; // сколько скипнуло
    let it = 0; // сколько всего итераций
    let extra = 0; //сколько лишних
    const testEmails = [
        '', 
        'ytka.gmail.com',
        'burger.lover@gmail.com',
        '', 'chip@gmail.com',
        '',
        'godofducks@gmail.com'
    ];
    testEmails.push('believeme@ytka.zub');
    for (const emails of testEmails) {
        it++;
        if (emails === ''){
            console.log('пропушено');
            skip++;
            continue;
        }else if (emails === 'believeme@ytka.zub'){
            console.log('найден лишний')
            extra++;
            break;
        }else {
            console.log('не найдено ничего');
            checksPassed++;
        }
    }
    console.log(`пропущено ${skip}`);
    console.log(`лишних найдено ${extra} из ${it} итерации`);
    console.log(`реальных адресов было: ${checksPassed}`);
});
test ('уменьшение времени приготовления через цикл превая часть while', async () => {
    let i = 90; //сек
    console.log('while');
    while (i >= 20){
    console.log(i); // если поменять оператор сравнения с > в < то while не выполнится ни разу, так как значение будет false
    i -= 10;
    }
    i = 90 // без этого do while начнёт с 20
    console.log('do while');
        do { 
        console.log(i); // если поменять оператор сравнения с > в < то do while выполнит его хотя бы раз, даже если значение будет false
        i -= 10
    }while (i >= 20);
    // console.log(i);
});
// test ('уменьшение через цикл вторая часть do while', async () => {
//     let i = 90; // сек
//         do { 
//         console.log(i); // если поменять оператор сравнения с > в < то do while выполнит его хотя бы раз, даже если значение будет false
//         i -= 10
//     }while (i > 20);
//     console.log(i);
// }); // для проверки do while отдельно 