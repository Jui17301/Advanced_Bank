
 // step-2 ,3
 function getInputFieldValueById(inputFieldId){
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value='';
  return inputFieldValue;
 }
 // step-4,6
 function getTextElementValueById(elementId){
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
 }

//  step-5
function setTextElementValueById(elementId,newValue){

  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;

}


