function expenseSummery(areaOfExpense) {
    const expenseInput = document.getElementById(areaOfExpense);
    let expenseAmount = parseFloat(expenseInput.value);
    return expenseAmount;
};

function validation() {


    if (isNumber < 0 && isNumber != 'number') {
        alert('Please enter a valid number');
    }
    else if (totalIncome < totalExpense) {
        alert('You are going to hell');
    }
    else {
        return isNumber;
    }
}

function calculateButton() {
    // total income
    const income = document.getElementById('total-income');
    const totalIncome = parseFloat(income.value);
    // total expense area
    const foodExpenseAmount = expenseSummery('food-expense');
    const rentExpenseAmount = expenseSummery('rent-expense');
    const clothingExpenseAmount = expenseSummery('clothing-expense');

    // get total expense
    const totalExpense = foodExpenseAmount + rentExpenseAmount + clothingExpenseAmount;
    if (totalIncome < totalExpense) {
        alert('You are going to hell');
    }

    document.getElementById('total-expense').innerText = totalExpense;
    const balance = totalIncome - totalExpense;
    document.getElementById('balance-money').innerText = balance;
}


document.getElementById('save-button').addEventListener('click', function () {
    let balance = document.getElementById('balance-money').innerText;
    const savingPercent = document.getElementById('save-percent-amount').value;
    savingInput = parseFloat(savingPercent);

    if (balance <= 0) {
        alert("You don't have enough money to save !!");
        return balance;
    }
    else if (savingInput < 0 && savingInput > balance) {
        alert('Please enter a valid number');
        return savings;
    }

    let savings = balance * savingInput / 100;



    // savings amount

    document.getElementById('saving-total').innerText = savings;
    const remainingBalance = balance - savings;
    document.getElementById('remain-balance').innerText = remainingBalance;
})


