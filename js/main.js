let start = document.querySelector('#start'),
    value = document.querySelectorAll('.budget-value, .daybudget-value, .level-value, .expenses-value, .optionalexpenses-value, .income-value, .monthsavings-value, .yearsavings-value'),
    expInput = document.querySelectorAll('.expenses-item'),
    data = document.querySelector('.data'),
    btn = data.getElementsByTagName('button'),
    btnExp = btn[1],
    btnOptExp = btn[2],
    btnCount = btn[3],
    optExp = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income-label'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    timeData = document.querySelectorAll('.year, .month, .day');

console.log();