import {test, expect} from '@playwright/test';

test ('цикл со временем приготовления', async ({page}) => {
    let i = 90;
    let i1 = i - 10
    while (i1 >= 30) {
        console.log(i1);        
        i = i1;
        i1 = i - 10

    }

});
test ('do while', async ({page}) => {
    let i = 90;
    do {
        console.log(i)
        i -= 10
    }while (i > 30) {
        console.log(i)
    }
});
test ('еда', async ({page}) => {
    let i = 0;
    let st = 0;
    let sk = 0;
    const foodType = ['', 'суши', 'борщ', '', 'рагу', 'нос', 'рамен', ''];
    for (const food of foodType) {
        i++
        if (food === '') {
            sk++
            continue;
        }else if (food === 'рамен') {
            console.log('нашли рамен');
            st = i
            break;
        }else{
    
        }

    }
    console.log(`всего итераций ${i}`)
    console.log(`пропущено ${sk}`)
    console.log(`продукт был на ${i - sk} итерации`)
});