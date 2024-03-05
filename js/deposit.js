
// step-1
document.getElementById('btn-deposit').addEventListener('click',function(){

  // step-2,3 calling
  const newDepositAmount = getInputFieldValueById('deposit-field');
 
  // step -4 calling
     const previousDepositTotal= getTextElementValueById('deposit-total');  

// step-5  calling

const newDepositTotal = previousDepositTotal+newDepositAmount;
setTextElementValueById('deposit-total',newDepositAmount);
// step-6 calling
const previousBalanceTotal=getTextElementValueById('balance-total');

// step-7
const newBalanceTotal = previousBalanceTotal+newDepositAmount
setTextElementValueById('balance-total',newBalanceTotal);

})