"use strict";

function calcSumm(money, perc, years) {
    let summ = 0;
    summ = money + (money * (perc / 100) * years);
    return summ;
}

let money, perc, years,
    isDeposit;


alert('Добро пожаловать!');

do {
    money = +prompt('Какую сумму денег вы хотите хранить в нашем банке?', '');
    if (money === 0) { alert('Спасибо, что посетили наш банк приходите еще!'); break; }

    if (money < 5000 && money > 0) {

        do {
            perc = +prompt(`Для вашего вклада в ${money} грн. существует такие годовые ставки: 3%, 5% и 10% `, '');

            if (perc === 0) { break; }

            switch (perc) {
                case 3:
                    years = 5;
                    alert(`Для вклада в ${money} грн. и годовой ставки ${perc}% существует депозит только на ${years} лет.`);
                    isDeposit = confirm(`Для вклада в ${money} грн. и годовой ставки ${perc}% сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Желаете внести ваши деньги на депозит?`);
                    if (isDeposit) {
                        alert(`Спасибо за ваш вклад. Сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Спасибо, что посетили наш банк!`);
                        break;
                    } else {
                        alert('Тогда введите другую годовую ставку.');
                        continue;
                    }
                    break;

                case 5:
                    years = 3;
                    alert(`Для вклада в ${money} грн. и годовой ставки ${perc}% существует депозит только на ${years} года.`);
                    isDeposit = confirm(`Для вклада в ${money} грн. и годовой ставки ${perc}% сумма за ${years} года составит: ${calcSumm(money, perc, years)} грн. Желаете внести ваши деньги на депозит?`);
                    if (isDeposit) {
                        alert(`Спасибо за ваш вклад. Сумма за ${years} года составит: ${calcSumm(money, perc, years)} грн. Спасибо, что посетили наш банк!`);
                        break;
                    } else {
                        alert('Тогда введите другую годовую ставку.');
                        continue;
                    }
                    break;

                case 10:
                    years = 1;
                    alert(`Для вклада в ${money} грн. и годовой ставки ${perc}% существует депозит только на ${years} год.`);
                    isDeposit = confirm(`Для вклада в ${money} грн. и годовой ставки ${perc}% сумма за ${years} год составит: ${calcSumm(money, perc, years)} грн. Желаете внести ваши деньги на депозит?`);
                    if (isDeposit) {
                        alert(`Спасибо за ваш вклад. Сумма за ${years} год составит: ${calcSumm(money, perc, years)} грн. Спасибо, что посетили наш банк!`);
                        break;
                    } else {
                        alert('Тогда введите другую годовую ставку.');
                        continue;
                    }
                    break;

                default:
                    alert('Такой годовой ставки нет! Введите заного!');
                    continue;
            }
            if (isDeposit === true) { break; }
        } while (perc !== 0);

    } else if (money >= 10000) {

        do {
            perc = +prompt(`Для вашего вклада в ${money} грн. существует такие годовые ставки: 15%, 25% и 30% `, '');

            if (perc === 0) { break; }

            let perc = parseFloat(perc);

            switch (perc) {
                case 15:
                    years = 5;
                    alert(`Для вклада в ${money} грн. и годовой ставки ${perc}% существует депозит только на ${years} лет.`);
                    isDeposit = confirm(`Для вклада в ${money} грн. и годовой ставки ${perc}% сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Желаете внести ваши деньги на депозит?`);
                    if (isDeposit) {
                        alert(`Спасибо за ваш вклад. Сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Спасибо, что посетили наш банк!`);
                        break;
                    } else {
                        alert('Тогда введите другую годовую ставку.');
                        continue;
                    }
                    break;

                case 25:
                    years = 8;
                    alert(`Для вклада в ${money} грн. и годовой ставки ${perc}% существует депозит только на ${years} лет.`);
                    isDeposit = confirm(`Для вклада в ${money} грн. и годовой ставки ${perc}% сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Желаете внести ваши деньги на депозит?`);
                    if (isDeposit) {
                        alert(`Спасибо за ваш вклад. Сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Спасибо, что посетили наш банк!`);
                        break;
                    } else {
                        alert('Тогда введите другую годовую ставку.');
                        continue;
                    }
                    break;

                case 30:
                    years = 10;
                    alert(`Для вклада в ${money} грн. и годовой ставки ${perc}% существует депозит только на ${years} лет.`);
                    isDeposit = confirm(`Для вклада в ${money} грн. и годовой ставки ${perc}% сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Желаете внести ваши деньги на депозит?`);
                    if (isDeposit) {
                        alert(`Спасибо за ваш вклад. Сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Спасибо, что посетили наш банк!`);
                        break;
                    } else {
                        alert('Тогда введите другую годовую ставку.');
                        continue;
                    }
                    break;

                default:
                    alert('Такой годовой ставки нет! Введите заного!');
                    continue;

            }
            if (isDeposit === true) { break; }
        } while (perc !== 0);

    } else if (money >= 5000 && money < 10000) {

        do {
            perc = +prompt(`Для вашего вклада в ${money} грн. существует такие годовые ставки: 5%, 15% и 25% `, '');

            if (perc === 0) { break; }

            let perc = parseFloat(perc);

            switch (perc) {
                case 5:
                    years = 3;
                    alert(`Для вклада в ${money} грн. и годовой ставки ${perc}% существует депозит только на ${years} года.`);
                    isDeposit = confirm(`Для вклада в ${money} грн. и годовой ставки ${perc}% сумма за ${years} года составит: ${calcSumm(money, perc, years)} грн. Желаете внести ваши деньги на депозит?`);
                    if (isDeposit) {
                        alert(`Спасибо за ваш вклад. Сумма за ${years} года составит: ${calcSumm(money, perc, years)} грн. Спасибо, что посетили наш банк!`);
                        break;
                    } else {
                        alert('Тогда введите другую годовую ставку.');
                        continue;
                    }
                    break;

                case 15:
                    years = 7;
                    alert(`Для вклада в ${money} грн. и годовой ставки ${perc}% существует депозит только на ${years} лет.`);
                    isDeposit = confirm(`Для вклада в ${money} грн. и годовой ставки ${perc}% сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Желаете внести ваши деньги на депозит?`);
                    if (isDeposit) {
                        alert(`Спасибо за ваш вклад. Сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Спасибо, что посетили наш банк!`);
                        break;
                    } else {
                        alert('Тогда введите другую годовую ставку.');
                        continue;
                    }
                    break;

                case 25:
                    years = 12;
                    alert(`Для вклада в ${money} грн. и годовой ставки ${perc}% существует депозит только на ${years} лет.`);
                    isDeposit = confirm(`Для вклада в ${money} грн. и годовой ставки ${perc}% сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Желаете внести ваши деньги на депозит?`);
                    if (isDeposit) {
                        alert(`Спасибо за ваш вклад. Сумма за ${years} лет составит: ${calcSumm(money, perc, years)} грн. Спасибо, что посетили наш банк!`);
                        break;
                    } else {
                        alert('Тогда введите другую годовую ставку.');
                        continue;
                    }
                    break;

                default:
                    alert('Такой годовой ставки нет! Введите заного!');
                    continue;

            }
            if (isDeposit === true) { break; }
        } while (perc !== 0);
    } else {
        alert('Проверьте правильность ввода!');
        continue;
    }

    if (isDeposit === true) { break; }

} while (money !== 0);