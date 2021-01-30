money = 500,
income = 'Макдональдс',
addExpenses = 'Лифт, Радио, Интернет',
deposit = true,
mission = 6305,
period = 5,
budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(income.length);

console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');

console.log(addExpenses.toLowerCase().split(', '));

console.log(budgetDay);






