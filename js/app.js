function totalExpense(areaOfExpense) {
    const expenseInput = document.getElementById(areaOfExpense);
    let expenseAmount = parseFloat(expenseInput.value);
    return expenseAmount;
};

function calculateButton() {
    // total income
    const income = document.getElementById('total-income');
    const totalIncome = parseFloat(income.value);
    // total expense area
    const foodExpenseAmount = totalExpense('food-expense');
    const rentExpenseAmount = totalExpense('rent-expense');
    const clothingExpenseAmount = totalExpense('clothing-expense');

    // get total expense
    const expenseTotal = foodExpenseAmount + rentExpenseAmount + clothingExpenseAmount;

    document.getElementById('total-expense').innerText = expenseTotal;
    const balance = totalIncome - expenseTotal;
    document.getElementById('balance-money').innerText = balance;
}

document.getElementById('save-button').addEventListener('click', function () {
    let balance = document.getElementById('balance-money').innerText;
    console.log('balance money clicked');
    const savingPercent = document.getElementById('save-percent-amount').value;
    savingInput = parseFloat(savingPercent);

    let savings = balance * savingInput / 100;
    document.getElementById('saving-total').innerText = savings;
    const remainingBalance = balance - savings;
    document.getElementById('remain-balance').innerText = remainingBalance;
})


