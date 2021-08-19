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
    debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amountValue;
}

document.getElementById('deposit-button').addEventListener('click',function(){
//upper code is being replaced by fucntion --> getInputValue()
    const depositeAmount = getInputValue('deposit-input')

//get current deposite and update deposit total
    updateTotalField('deposite-total', depositeAmount)

//update balance
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText = balanceTotal.innerText
    const preBalanceTotal = parseFloat(balanceTotalText)

    balanceTotal.innerText = preBalanceTotal + depositeAmount
    

})

//withdraw kahini

document.getElementById('withdraw-button').addEventListener('click',function(){
    //using function for getting input
    const withdrawAmount = getInputValue('withdraw-input')
    //get and update withdraw
    updateTotalField('withdraw-total', withdrawAmount)

//balance update
    const balanceTotal = document.getElementById('balance-total')
    const balanceText = balanceTotal.innerText
    const preBalanceAmount = parseFloat(balanceText)

    balanceTotal.innerText = preBalanceAmount - withdrawAmount
    
})