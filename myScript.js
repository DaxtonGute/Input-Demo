changedCred = document.getElementById("ChangeCred");
enteredCred = document.getElementById("EnterCred");

var pref = {
  email: "none",
  password: "none",
  reaction: "none",
  signUp: "no",
}

localStorage.setItem("preferences", JSON.stringify(pref));

// Click event to attach to button
function tryCred () {
  var inputEmail = document.getElementById('changedEmail').value;
  var inputPassword = document.getElementById('changedPassword').value;

  document.getElementById('changedEmail').value = "";
  document.getElementById('changedPassword').value = "";

  if (inputEmail == JSON.parse(localStorage.getItem("preferences")).email && inputPassword == JSON.parse(localStorage.getItem("preferences")).password){
    document.getElementById('wrong').style.display = "none";
    document.getElementById('correct').style.display = "block";
  }else{
    document.getElementById('correct').style.display = "none";
    document.getElementById('wrong').style.display = "block";
  }
}

function autofill(){
  document.getElementById('changedEmail').value = JSON.parse(localStorage.getItem("preferences")).email;
  document.getElementById('changedPassword').value = JSON.parse(localStorage.getItem("preferences")).password;
  if (JSON.parse(localStorage.getItem("preferences")).signUp == "true"){
    document.getElementById('emailSignup').checked = true;
  }else{
    document.getElementById('emailSignup').checked = false;
  }
  if (JSON.parse(localStorage.getItem("preferences")).reaction == "happy"){
    document.getElementById('happy').checked = true;
  }else if(JSON.parse(localStorage.getItem("preferences")).reaction == "meh"){
    document.getElementById('meh').checked = true;
  }else if(JSON.parse(localStorage.getItem("preferences")).reaction == "unhappy"){
    document.getElementById('unhappy').checked = true;
  }
}

function changeCred () {
  pref.email = document.getElementById('newEmail').value;
  pref.password = document.getElementById('newPassword').value
  document.getElementById('newEmail').value = "";
  document.getElementById('newPassword').value = "";
  localStorage.setItem("preferences", JSON.stringify(pref));
}

function reactions () { //how to do radio buttons
  document.getElementById('myResponse').style.display = "block";
  if (document.getElementById('happy').checked){
    document.getElementById('myResponse').innerHTML = "YAY. AWESOME. ME TOO!";
    pref.reaction = "happy";
  }
  else if (document.getElementById('meh').checked) {
    document.getElementById('myResponse').innerHTML = "I am sorry to hear that. If you are meh, I am too.";
    pref.reaction = "meh";
  }
  else if (document.getElementById('unhappy').checked) {
    document.getElementById('myResponse').innerHTML = "Then leave...I never liked you anyways";
    pref.reaction = "unhappy";
  }
  localStorage.setItem("preferences", JSON.stringify(pref));
}

function checkEmail () {
  if (document.getElementById('emailSignup').checked){
    document.getElementById('confirmMessage').style.display = "block";
    window.setTimeout(checkEmailPtTwo, 8000);
    pref.signUp = "true";
  }else{
    pref.signUp = "false";
  }

  localStorage.setItem("preferences", JSON.stringify(pref));
}

function checkEmailPtTwo (){
  document.getElementById('confirmMessage').innerHTML = "Please check your inbox for a confirmation email...IMMA OFC JK: IDK HOW TO DO THAT YET";
  window.setTimeout(checkEmailPtThree, 1000);
}
function checkEmailPtThree (){
  document.getElementById('confirmMessage').innerHTML = "Please check your inbox for a confirmation email...IMMA OFC JK: IDK HOW TO DO THAT YET...yet";
}
