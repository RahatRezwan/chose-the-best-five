//Calculate Player Expense
document.getElementById("player-budget-btn").addEventListener("click", function () {
    //Get Player Budget From Input
    const perPlayerBudget = getElementsValueUsingId("player-budget");
    //Set Total Player Expense for 5 players
    const playerExpenses = getInnerTextById("player-expense");
    playerExpenses.innerText = perPlayerBudget * 5;
});

//Calclulate total Expense
document.getElementById("total-budget-btn").addEventListener("click", function () {
    //get player expense
    const totalPlayerExpense = getInnerTextConvertById("player-expense");
    //get manager expense
    const totalManagerExpense = getElementsValueUsingId("manager-budget");
    //get Coach Expense
    const totalCoachExpense = getElementsValueUsingId("coach-budget");

    //set total expense value
    const totalExpenseText = getInnerTextById("total-expense");
    totalExpenseText.innerText = totalPlayerExpense + totalManagerExpense + totalCoachExpense;
});
