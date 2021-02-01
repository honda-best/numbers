  
let minValue = -999;
let maxValue = 999;
let answerNumber = 0;
let orderNumber = 1;
let gameRun = true;


function answerFieldToText(numToText) {
    let textVar = '';
    let numNumber = numToText;
    if (numToText < 0) {
        textVar = 'минус ';
    }
    textMod = Math.abs(numToText);
    if (textMod > 100) {
        switch (Math.trunc(textMod / 100)) {
            case 1: textVar += 'сто '; break;
            case 2: textVar += 'двести '; break;
            case 3: textVar += 'триста '; break;
            case 4: textVar += 'четыреста '; break;
            case 5: textVar += 'пятьсот '; break;
            case 6: textVar += 'шестьсот '; break;
            case 7: textVar += 'семьсот '; break;
            case 8: textVar += 'восемьсот '; break;
            case 9: textVar += 'девятьсот '; break;
        }
    }

    if (textMod / 10 >= 10) {
        switch (Math.trunc((textMod % 100) / 10)) {
            case 2: textVar += 'двадцать '; break;
            case 3: textVar += 'тридцать '; break;
            case 4: textVar += 'сорок '; break;
            case 5: textVar += 'пятьдесят '; break;
            case 6: textVar += 'шестьдесят '; break;
            case 7: textVar += 'семьдесят '; break;
            case 8: textVar += 'восемьдесят '; break;
            case 9: textVar += 'девяносто '; break;
        }
        if ((textMod % 10 < 10) && (Math.trunc((textMod % 100) / 10) > 1)) {
            switch (textMod % 10) {
                case 1: textVar += 'один'; break;
                case 2: textVar += 'два'; break;
                case 3: textVar += 'три'; break;
                case 4: textVar += 'четыре '; break;
                case 5: textVar += 'пять'; break;
                case 6: textVar += 'шесть'; break;
                case 7: textVar += 'семь'; break;
                case 8: textVar += 'восемь'; break;
                case 9: textVar += 'девять'; break;
            }
        }
    }

    if (textMod < 100) {
        switch (Math.trunc((textMod % 100) / 10)) {
            case 2: textVar += 'двадцать '; break;
            case 3: textVar += 'тридцать '; break;
            case 4: textVar += 'сорок '; break;
            case 5: textVar += 'пятьдесят '; break;
            case 6: textVar += 'шестьдесят '; break;
            case 7: textVar += 'семьдесят '; break;
            case 8: textVar += 'восемьдесят '; break;
            case 9: textVar += 'девяносто '; break;
        }
        if ((textMod % 10 < 10) && (Math.trunc((textMod % 100) / 10) > 1)) {
            switch (textMod % 10) {
                case 1: textVar += 'один'; break;
                case 2: textVar += 'два'; break;
                case 3: textVar += 'три'; break;
                case 4: textVar += 'четыре '; break;
                case 5: textVar += 'пять'; break;
                case 6: textVar += 'шесть'; break;
                case 7: textVar += 'семь'; break;
                case 8: textVar += 'восемь'; break;
                case 9: textVar += 'девять'; break;
            }
        }
    }

    if ((textMod % 100 > 0) && (textMod % 100 < 20)) {
        textMod = textMod % 100;
    }
    if (textMod < 20) {
        switch (textMod) {
            case 0: textVar += '0'; break;
            case 1: textVar += 'один'; break;
            case 2: textVar += 'два'; break;
            case 3: textVar += 'три'; break;
            case 4: textVar += 'четыре'; break;
            case 5: textVar += 'пять'; break;
            case 6: textVar += 'шесть'; break;
            case 7: textVar += 'семь'; break;
            case 8: textVar += 'восемь'; break;
            case 9: textVar += 'девять'; break;
            case 10: textVar += 'десять'; break;
            case 11: textVar += 'одиннадцать'; break;
            case 12: textVar += 'двенадцать'; break;
            case 13: textVar += 'тринадцать'; break;
            case 14: textVar += 'четырнадцать'; break;
            case 15: textVar += 'пятнадцать'; break;
            case 16: textVar += 'шестнадцать'; break;
            case 17: textVar += 'семнадцать'; break;
            case 18: textVar += 'восемнадцать'; break;
            case 19: textVar += 'девятнадцать'; break;
        }
    }

    textMod = String(textVar);
    if (textVar.length < 20) {
        return textVar;
    }
    else {
        return numNumber;
    }
}

document.getElementById('btnRetry').style.visibility = 'hidden';
document.getElementById('btnLess').style.visibility = 'hidden';
document.getElementById('btnOver').style.visibility = 'hidden';
document.getElementById('btnEqual').style.visibility = 'hidden';

document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumberField = document.getElementById('orderNumberField');
    answerField = document.getElementById('answerField');
    answerField.innerText = '';
    document.getElementById("inputWindowMin").hidden = false;
    document.getElementById("inputWindowMax").hidden = false;
    document.getElementById("btnStart").innerText = 'Ввести данные';
    document.getElementById("answerText").hidden = false;
    inputWindowMin.value = '';
    inputWindowMax.value = '';
    orderNumberField.innerText = '';
    document.getElementById('btnRetry').style.visibility = 'hidden';
    document.getElementById('btnStart').style.visibility = 'visible';
    document.getElementById('btnLess').style.visibility = 'hidden';
    document.getElementById('btnOver').style.visibility = 'hidden';
    document.getElementById('btnEqual').style.visibility = 'hidden';
})

document.getElementById('btnStart').addEventListener('click', function () {
    document.getElementById('btnStart').style.visibility = 'hidden';
    minValue = parseInt(inputWindowMin.value);
    maxValue = parseInt(inputWindowMax.value);
        if (minValue > maxValue) {
            const answerPhrase =
                `Вы загадали неправильное число!`;
            answerField.innerText = answerPhrase;
            gameRun = false;
            document.getElementById('btnRetry').style.visibility = 'visible'; 
        } else {
    document.getElementById('btnLess').style.visibility = 'visible';
    document.getElementById('btnOver').style.visibility = 'visible';
    document.getElementById('btnEqual').style.visibility = 'visible';
    if (isNaN(minValue) || minValue < -999) { minValue = -999 };
    if (isNaN(maxValue) || maxValue > 999) { maxValue = 999 };
    document.getElementById("inputWindowMin").hidden = true;
    document.getElementById("inputWindowMax").hidden = true;
    document.getElementById("btnStart").hidden = true;
    document.getElementById("answerText").hidden = true;
    answerField = document.getElementById('answerField');
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber =  1 ;
    gameRun = true;
    orderNumberField = document.getElementById('orderNumberField');
    orderNumberField.innerText = 'Вопрос №1';
    //answerField.innerText = `Вы загадали число ${answerNumber}?`;
    answerField.innerText = `Вы загадали число \n ${answerFieldToText(answerNumber)}?`;
}})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const answerPhrase = 
                `Вы загадали неправильное число`;
            answerField.innerText = answerPhrase;
            gameRun = false;
            document.getElementById('btnRetry').style.visibility = 'visible';
            document.getElementById('btnLess').style.visibility = 'hidden';
            document.getElementById('btnOver').style.visibility = 'hidden';
            document.getElementById('btnEqual').style.visibility = 'hidden';
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = 'Вопрос № ' + orderNumber;
            orderSelect = Math.round(Math.random() * 2);
            switch (orderSelect) {
                case 0:
                    textSelect = 'Возможно, это число';
                    break;
                case 1:
                    textSelect = 'Скорее всего это число';
                    break;
                case 2:
                    textSelect = 'Вероятно, это число';
                    break;
            }
            //answerField.innerText = (textSelect + ` ${answerNumber }?`);
            answerField.innerText = (textSelect + `\n ${answerFieldToText(answerNumber)}?`);
        }
    }
})


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const answerPhrase =
                `Вы загадали неправильное число`;
            answerField.innerText = answerPhrase;
            gameRun = false;
            document.getElementById('btnRetry').style.visibility = 'visible';
            document.getElementById('btnLess').style.visibility = 'hidden';
            document.getElementById('btnOver').style.visibility = 'hidden';
            document.getElementById('btnEqual').style.visibility = 'hidden';
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = 'Вопрос № ' + orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
            orderSelect = Math.round(Math.random() * 2);
            switch (orderSelect) {
                case 0:
                    textSelect = 'Возможно, это число';
                    break;
                case 1:
                    textSelect = 'Скорее всего это число';
                    break;
                case 2:
                    textSelect = 'Вероятно, это число';
                    break;
            }
            //answerField.innerText = (textSelect + ` ${answerNumber }?`);
            answerField.innerText = (textSelect + `\n ${answerFieldToText(answerNumber)}?`);
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        orderSelect = Math.round(Math.random() * 2);
        switch (orderSelect) {
            case 0:
                textSelect = 'Я всегда угадываю\n\u{1F60E}';
                break;
            case 1:
                textSelect = 'Это было очень просто\n\u{1F602}';
                break;
            case 2:
                textSelect = 'Это было несложно\n\u{1F60E}';
                break;
        }
        answerField.innerText = textSelect;
        btnRetry.innerText = 'Ещё раз?'
        inputWindowMin.value = '';
        inputWindowMax.value = '';
        orderNumberField.innerText = '';
        gameRun = false;
        document.getElementById('btnRetry').style.visibility = 'visible';
        document.getElementById('btnLess').style.visibility = 'hidden';
        document.getElementById('btnOver').style.visibility = 'hidden';
        document.getElementById('btnEqual').style.visibility = 'hidden';
    }
})