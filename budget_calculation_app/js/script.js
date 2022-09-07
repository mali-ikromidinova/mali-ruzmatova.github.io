let start = document.getElementById('start');
//values
let budgetValue = document.querySelector(".budget-value"); 
let daybudgetValue = document.querySelector(".daybudget-value");
let expensesValue = document.getElementsByClassName("expenses-value");
let optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value");
let incomeValue = document.getElementsByClassName('income-value');
let monthSavingsValue = document.getElementsByClassName('monthsavings-value');
let yearSavingsValue = document.getElementsByClassName('yearsavings-value');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');
let sumValue = document.querySelector('#sum');
let percentValue = document.querySelector('#percent');
//items
let expensesItem = document.getElementsByClassName(".expenses-item");
let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");
let chooseIncome = document.querySelectorAll(".choose-income");
let savings = document.querySelector('#savings');

//btn
let countBudgetBtn = document.querySelector(".count-budget-btn");
let expensesBtn = document.querySelector('.expenses-item-btn');
let optionalExpensesBtn = document.querySelector('.optionalexpenses-btn');


let money, time;

start.addEventListener('click', function(){
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
  
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function(){
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value,
        b = expensesItem[++i].value;

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i = i - 1;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
  for (let i = 0; i < optionalExpensesItem.length; i++){
    let optional = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = optional;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBudgetBtn.addEventListener('click', function(){
  if(appData.budget != undefined){
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    daybudgetValue.textContent = appData.moneyPerDay
  }
  else {
    daybudgetValue.textContent = 'Error'
  }
});

chooseIncome.addEventListener('input', function(){
  let items = chooseIncome.value;
    
    if (typeof items === 'string' && items != null && items != ""){
        appData.income = items.split(', ');
    }
  incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function(){
  if(appData.savings == true){
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function(){
  if (appData.savings == true){
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = sum / 100 * percent;
    
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
})

percentValue.addEventListener('input', function(){
  if (appData.savings == true){
    let sum = +sumValue.value,
        percent = +percentValue.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = sum / 100 * percent;
    
    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: "",
  savings: false, 
};

