function expenseSummery(areaOfExpense) {
    const expenseInput = document.getElementById(areaOfExpense);
    let expenseAmount = parseFloat(expenseInput.value);
    return expenseAmount;
};


function calculateButton() {
    // total income
    const income = document.getElementById('total-income');
    const totalIncome = parseFloat(income.value);
    // total expense area
    const foodExpenseAmount = expenseSummery('food-expense');
    const rentExpenseAmount = expenseSummery('rent-expense');
    const clothingExpenseAmount = expenseSummery('clothing-expense');
    if (foodExpenseAmount < 0 || isNaN(foodExpenseAmount)) {
        alert('Plese enter expense amount in positive number in food expense box !!');
        return;
    }

    // validation
    if ((rentExpenseAmount < 0 || clothingExpenseAmount < 0) || (isNaN(rentExpenseAmount || clothingExpenseAmount))) {
        alert('Strings and negetive numbers are not allowed');
        return;
    }
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

    // validation
    if (balance <= 0) {
        alert("You don't have enough money to save !!");
        return balance;
    }
    else if (savingInput < 0 || savingInput > 100) {
        alert('Please enter a valid number ');
        return savings;
    }

    let savings = balance * savingInput / 100;



    // savings amount

    document.getElementById('saving-total').innerText = savings;
    const remainingBalance = balance - savings;
    document.getElementById('remain-balance').innerText = remainingBalance;

})


