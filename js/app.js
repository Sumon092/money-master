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
    const balance = totalIncome - totalExpense;
    document.getElementById('balance-money').innerText = balance;


});

document.getElementById('save-button').addEventListener('click', function () {
    let balance = document.getElementById('balance-money').innerText;
    const savingPercent = document.getElementById('save-percent-amount').value;
    savingInput = parseFloat(savingPercent);

    let savings = balance * savingInput / 100;
    document.getElementById('saving-total').innerText = savings;
    const remainingBalance = balance - savings;
    document.getElementById('remain-balance').innerText = remainingBalance;

})


