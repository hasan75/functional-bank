// function doubleIt(num){
//     const result = num*2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);
function getInputValue(inputID){
    const inputField = document.getElementById(inputID);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amountValue){
   // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amountValue;
}
function updateBalance(adjustment, isAdd){
    const balanceField = document.getElementById('balance-total');
    // const balanceText = balanceField.innerText;
    // const preBalanceAmount = parseFloat(balanceText)
    const preBalanceAmount = getCurrentBalance()
    if(isAdd == true){
      balanceField.innerText = preBalanceAmount + adjustment  
    }
    else{
        balanceField.innerText = preBalanceAmount - adjustment
    }
}

function getCurrentBalance(){
    const balanceField = document.getElementById('balance-total');
    const balanceText = balanceField.innerText;
    const preBalanceAmount = parseFloat(balanceText)
    return preBalanceAmount;
}

//handling depostie input
document.getElementById('deposit-button').addEventListener('click',function(){
//upper code is being replaced by fucntion --> getInputValue()
    const depositeAmount = getInputValue('deposit-input')

    if ( depositeAmount > 0 ) {
        //get current deposite and update deposit total
    updateTotalField('deposite-total', depositeAmount)
    //update balance
        updateBalance(depositeAmount,true)
    }
        
})
//withdraw kahini
document.getElementById('withdraw-button').addEventListener('click',function(){
    //using function for getting input
        const withdrawAmount = getInputValue('withdraw-input')

        const currentBalance = getCurrentBalance()

        if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
            //get and update withdraw
        updateTotalField('withdraw-total', withdrawAmount)
    //balance update
        updateBalance(withdrawAmount, false)
        }

        if(withdrawAmount > currentBalance){
            console.log('YOu can not withdraw, balance excedded')
        }
    
})