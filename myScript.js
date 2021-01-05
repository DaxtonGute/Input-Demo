changedCred = document.getElementById("ChangeCred");
enteredCred = document.getElementById("EnterCred");

globalEmail = "";
globalPassword = "";


// Click event to attach to button
function tryCred () {
  var inputEmail = document.getElementById('changedEmail').value;
  var inputPassword = document.getElementById('changedPassword').value;

  document.getElementById('changedEmail').value = "";
  document.getElementById('changedPassword').value = "";

  if (inputEmail == globalEmail && inputPassword == globalPassword){
    document.getElementById('wrong').style.display = "none";
    document.getElementById('correct').style.display = "block";
  }else{
    document.getElementById('correct').style.display = "none";
    document.getElementById('wrong').style.display = "block";
  }
}

function changeCred () {
  globalEmail = document.getElementById('newEmail').value;
  globalPassword = document.getElementById('newPassword').value;
  document.getElementById('newEmail').value = "";
  document.getElementById('newPassword').value = "";
}
