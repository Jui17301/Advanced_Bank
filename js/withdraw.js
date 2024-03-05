
// step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
  // step-2
  const newWithdrawAmount = getInputFieldValueById('withdraw-field');

  //  step-3
  const previousWithdrawTotal =getTextElementValueById('withdraw-total')

  // step-4
   const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
  setTextElementValueById('withdraw-total',newWithdrawTotal);
 
  //  step-5
  const previousBalanceTotal = getTextElementValueById('balance-total');
  // step-6
const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
setTextElementValueById('balance-total',newBalanceTotal);


})