changedCred = document.getElementById("ChangeCred");
enteredCred = document.getElementById("EnterCred");

localStorage.setItem("email", "email");
localStorage.setItem("password", "password");



// Click event to attach to button
function tryCred () {
  var inputEmail = document.getElementById('changedEmail').value;
  var inputPassword = document.getElementById('changedPassword').value;

  document.getElementById('changedEmail').value = "";
  document.getElementById('changedPassword').value = "";

  if (inputEmail == localStorage.getItem("email") && inputPassword == localStorage.getItem("password")){
    document.getElementById('wrong').style.display = "none";
    document.getElementById('correct').style.display = "block";
  }else{
    document.getElementById('correct').style.display = "none";
    document.getElementById('wrong').style.display = "block";
  }
}

function autofill(){
  document.getElementById('changedEmail').value = localStorage.getItem("email");
  document.getElementById('changedPassword').value = localStorage.getItem("password");
}

function changeCred () {
  localStorage.setItem("email", document.getElementById('newEmail').value);
  localStorage.setItem("password", document.getElementById('newPassword').value);
  document.getElementById('newEmail').value = "";
  document.getElementById('newPassword').value = "";
}

function happy () { //how to do radio buttons
  document.getElementById('myResponse').style.display = "block";
  document.getElementById('myResponse').innerHTML = "YAY. AWESOME. ME TOO!"
}

function meh () {
  document.getElementById('myResponse').style.display = "block";
  document.getElementById('myResponse').innerHTML = "I am sorry to hear that. If you are meh, I am too."
}

function unhappy () {
  document.getElementById('myResponse').style.display = "block";
  document.getElementById('myResponse').innerHTML = "Then leave...I never liked you anyways"
}

function checkEmail () {
  document.getElementById('confirmMessage').style.display = "block";
  window.setTimeout(checkEmailPtTwo, 8000);
}

function checkEmailPtTwo (){
  document.getElementById('confirmMessage').innerHTML = "Please check your inbox for a confirmation email...IMMA OFC JK: IDK HOW TO DO THAT YET";
  window.setTimeout(checkEmailPtThree, 1000);
}
function checkEmailPtThree (){
  document.getElementById('confirmMessage').innerHTML = "Please check your inbox for a confirmation email...IMMA OFC JK: IDK HOW TO DO THAT YET...yet";
}
