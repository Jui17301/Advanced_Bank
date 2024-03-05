

document.getElementById('btn-submit').addEventListener('click',function(){

  const emailField = document.getElementById('user-email');
  const emailValue = emailField.value ;
  const passwordField = document.getElementById('user-password');
  const passwordValue = passwordField.value ;

if(emailValue==='jui@gmail.com' && passwordValue==='jui12345'){
  window.location.href = 'bank.html';
}
else{
  alert ('Invalid User');
}

})