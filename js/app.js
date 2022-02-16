/* function totalExpense() {
    const ExpenseType = document.getElementById(areaOf + '-expense');
    const ExpenseAmount = parseFloat(foodExpense.value);
} */

document.getElementById('calculate-button').addEventListener('click', function () {
    const income = document.getElementById('total-income');
    // console.log(income, "income button coming");
    const totalIncome = parseFloat(income.value);
    // console.log(incomeAmount);

    const foodExpense = document.getElementById('food-expense');
    const foodExpenseAmount = parseFloat(foodExpense.value);
    console.log(foodExpenseAmount, 'food expense');
    const rentExpense = document.getElementById('rent-expense');
    const rentExpenseAmount = parseFloat(rentExpense.value);
    console.log(rentExpenseAmount)

    const clothingExpense = document.getElementById('clothing-expense');
    const clothingExpenseAmount = parseFloat(clothingExpense.value);
    console.log(clothingExpenseAmount);

    const totalExpense = foodExpenseAmount + rentExpenseAmount + clothingExpenseAmount;
    console.log(totalExpense);

    document.getElementById('total-expense').innerText = totalExpense;
    const Balance = totalIncome - totalExpense;
    document.getElementById('balance-money').innerText = Balance;
});



