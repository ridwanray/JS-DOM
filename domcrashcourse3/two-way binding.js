var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

 itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);
//itemInput.addEventListener('keydown', runEvent);
function runEvent(e){
  userInput = e.target.value;  
  if (e.target.value.length < 3){
    errorinfo = `Your Username Cannot be less that 4 Characters`;
  }
  else{
    errorinfo = ``;
  };
 
  document.getElementById('form-information').innerText = userInput;
  document.getElementById('errorinfo').innerText = errorinfo;