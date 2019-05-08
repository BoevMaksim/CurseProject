let startBtn = document.querySelector('#start'),
    values = document.querySelectorAll('.budget-value, .daybudget-value, .level-value, .expenses-value, .optionalexpenses-value, .income-value, .monthsavings-value, .yearsavings-value'),
    expInput = document.querySelectorAll('.expenses-item'),
    data = document.querySelector('.data'),
    btn = data.querySelectorAll('button'),
    btnExp = document.querySelector('.expenses-item-btn'),
    btnOptExp = document.querySelector('.optionalexpenses-btn'),
    btnCount = document.querySelector('.count-budget-btn'),
    optExp = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    valueYer = document.querySelector('.year-value'),
    valueMonth = document.querySelector('.month-value'),
    valueDay = document.querySelector('.day-value');

let money, time, appData ;

    btnExp.disabled = true;
    btnOptExp.disabled = true;
    btnCount.disabled = true;

    startBtn.addEventListener('click', function(){
    btnExp.disabled = false;
    btnOptExp.disabled = false;
    btnCount.disabled = false;
    time = prompt ('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt ('Ваш бюджет на месяц?' , '');
while (time == '' || time == '' || time == null){
    time = prompt('Пожалуйста, введите дату в формате YYYY-MM-DD');
    }      
while (isNaN(money) || money == '' || money == null){
    money = +prompt ('Пожалуйста, укажите Ваш бюджет на месяц' , '');
    }
    appData.budget = money;
    appData.timeData = time;
    values[0].textContent = money.toFixed();
    valueYer.value = new Date (Date.parse(time)).getFullYear();
    valueMonth.value = new Date (Date.parse(time)).getMonth() + 1;
    valueDay.value = new Date (Date.parse(time)).getDate();
});

let sum = 0;

btnExp.addEventListener('click', function(){
    for (let i = 0; i < expInput.length; i++) {
        let a = expInput[i].value,
            b = expInput[++i].value;
            
            if ((typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length <50 ){
                appData.expenses[a] = b;
                sum += +b;
            } else {
                i = i-1;
            }
    }
    values[3].textContent = sum;
});

btnOptExp.addEventListener('click', function(){
    for (let i = 0; i < optExp.length; i++) {
        let opt = optExp[i].value;
        appData.optionalExpenses[i] = opt;
        while(appData.optionalExpenses[i] == '' ){ 
           i= i-4;
            alert ('Заполните все поля!');};  
        values[4].textContent += opt + ' ';
       
    }
});

btnCount.addEventListener('click', function(){
    if(appData.budget != undefined){
        let budgetEdited = appData.budget - sum;
        appData.moneyPerDay =  budgetEdited/30;
        values[1].textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay <100){
            values[2].textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay >=100 && appData.moneyPerDay <=500){
            values[2].textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay >500 && appData.moneyPerDay <=1000){
            values[2].textContent = 'Высокий уровень достатка';
        } else if (appData.moneyPerDay >1000){
			values[2].textContent = 'Очень высокий уровень достатка';
		} else {
            values[2].textContent = 'Ошибка';
        }
    } else {
        values[1].textContent = 'Ошибка! Начните расчет';
    }
});

chooseIncome.addEventListener('change', function (){
    let item = chooseIncome.value;
    appData.income = item.split(', ');
    values[5].textContent = appData.income;
   
});

checkSavings.addEventListener('click', function(){
    if (appData.savings == true){
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
        persent = +choosePercent.value;

        appData.monthIncome = sum/100/12*persent;
        appData.yerIncome = sum/100*persent;
        values[6].textContent = appData.monthIncome.toFixed(1);
        values[7].textContent = appData.yerIncome.toFixed(1);
    }
});
choosePercent.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +chooseSum.value,
        persent = +choosePercent.value;

        appData.monthIncome = sum/100/12*persent;
        appData.yerIncome = sum/100*persent;
        values[6].textContent = appData.monthIncome.toFixed(1);
        values[7].textContent = appData.yerIncome.toFixed(1);
    }
});
appData = {
    budget : money, 
    timeData : time,
    expenses : {}, // -->Обязательные расходы
    optionalExpenses : {}, //--> Необязательные рассходы
    income : [], //--> Доп. доходы
    savings : false
    };
    