lastsName = document.getElementById('lastName');
lastsName.addEventListener('keypress', suggestName);
function suggestName(e){
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  randomValue = Math.floor((Math.random() * 100000) + 1);
  if (firstName.length > 1 && lastName.length > 1){
    suggestedName = `${firstName}_${lastName}${randomValue}`;

  document.getElementById("suggestedName").value = suggestedName;
  }  
}
