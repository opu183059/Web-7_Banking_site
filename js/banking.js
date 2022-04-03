document.getElementById('depositButton').addEventListener('click',function(){
    // Deposit calculation
    const depositinput = document.getElementById('depositAmount');
    const depositText = depositinput.value;
    const depositValue = parseFloat(depositText);

    const depositTotal = document.getElementById('todayDeposit');
    const currentDepositText = depositTotal.innerText;
    const currentDepositAmount = parseFloat(currentDepositText);

    const newDepositTotal = currentDepositAmount + depositValue;

    depositTotal.innerText = newDepositTotal;

    depositinput.value='';
    // Balance calculation

    const balance = document.getElementById('balance');
    const previousBalanceText = balance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalance = previousBalanceAmount + depositValue;

    balance.innerText = newBalance;
})

document.getElementById('withdrawButton').addEventListener('click', function(){

    const withdrawInput = document.getElementById('withdrawAmount');
    const withdrawText = withdrawInput.value;
    const withdrawValue = parseFloat(withdrawText);

    const withdrawTotal = document.getElementById('todayWithdraw');
    const todayWithdraw = withdrawTotal.innerText;
    const todayWithdrawAmount = parseFloat(todayWithdraw);

    const currentWithdraw = withdrawValue + todayWithdrawAmount;
    withdrawTotal.innerText = currentWithdraw;

    withdrawInput.value = '';

    // Balance calculation
    const balance = document.getElementById('balance');
    const previousBalanceText = balance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalance = previousBalanceAmount - withdrawValue;

    balance.innerText = newBalance;
})