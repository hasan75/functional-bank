// function doubleIt(num){
//     const result = num*2;
//     return result;
// }

// const first = doubleIt(5);
// const second = doubleIt(7);
function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositeAmountText = depositInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    
    //clear input field
    depositInput.value = '';

    return depositeAmount;
}

document.getElementById('deposit-button').addEventListener('click',function(){
    // const depositInput = document.getElementById('deposit-input');
    // const depositeAmountText = depositInput.value;
    // const depositeAmount = parseFloat(depositeAmountText)
    //upper code is being replaced by fucntion --> getInputValue()
    const depositeAmount = getInputValue()
//get current depostir
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const preDepostitTotalAmount = parseFloat(depositeTotalText)

    depositeTotal.innerText = preDepostitTotalAmount + depositeAmount;

//update balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const preBalanceTotal = parseFloat(balanceTotalText)

    balanceTotal.innerText = preBalanceTotal + depositeAmount
    

})

//withdraw kahini

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawInputText = withdrawInput.value
    const withdrawAmount = parseFloat(withdrawInputText)

    const withdrawTotal = document.getElementById('withdraw-total')
    const withdrawTotalText = withdrawTotal.innerText
    const preWithdrawTotal = parseFloat(withdrawTotalText)

    withdrawTotal.innerText = preWithdrawTotal + withdrawAmount

//balance update
    const balanceTotal = document.getElementById('balance-total')
    const balanceText = balanceTotal.innerText
    const preBalanceAmount = parseFloat(balanceText)

    balanceTotal.innerText = preBalanceAmount - withdrawAmount
    
})