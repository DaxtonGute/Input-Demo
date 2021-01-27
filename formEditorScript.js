var insideThis = document.getElementById("inside");
var radioGroups = [];
var allElements = []; // [Element, label, response]


try{
  var pref = {
    email: JSON.parse(localStorage.getItem("preferences")).email,
    password: JSON.parse(localStorage.getItem("preferences")).password,
    reaction: JSON.parse(localStorage.getItem("preferences")).reaction,
    signUp: JSON.parse(localStorage.getItem("preferences")).signUp,
  }
}catch{
  var pref = {
    email: "none",
    password: "none",
    reaction: "none",
    signUp: "no",
  }
}

function newTextField() {                    //TEXT
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the label's text here";
  var newLineOne = document.createElement("br");
  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "This is a Text Field";
  input.style.width = "100%";
  input.readOnly = true;

  input.style.backgroundColor = "grey";
  var newLineTwo = document.createElement("p");

  allElements.push(["textField", label, ""]);
  insideThis.appendChild(label);
  insideThis.appendChild(newLineOne);
  insideThis.appendChild(input);
  insideThis.appendChild(newLineTwo);
}



function newNumberField() {                   //NUMBERS //add the max and min
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the label's text here";

  // var min = document.createElement("input");
  // min.type = "number";
  // min.placeholder = "min"
  // min.style.width = "100px";
  // var max = document.createElement("input");
  // max.type = "number";
  // max.placeholder = "max";
  // max.style.width = "100px";

  var newLineOne = document.createElement("br");
  var input = document.createElement("input");
  input.type = "number";
  input.placeholder = "This is a Number Field";
  input.readOnly = true;

  input.style.backgroundColor = "grey";
  var newLineTwo = document.createElement("p");

  allElements.push(["numberField", label, ""]);
  insideThis.appendChild(label);
  //insideThis.appendChild(min);
  //insideThis.appendChild(max);
  insideThis.appendChild(newLineOne);
  insideThis.appendChild(input);
  insideThis.appendChild(newLineTwo);
}



function newRadioGroup() {                  //RADIOGROUP
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the radio group's text here";
  radioGroups.push(label);
  var newLine = document.createElement("p");

  allElements.push(["radioGroup", label, ""]);
  insideThis.appendChild(label);
  insideThis.appendChild(newLine);
}



function newRadioButton(){                  //RADIOBUTTON
  var button = document.createElement("input");
  button.type = "radio";
  button.style.padding = "0px 0px 0px 30px";
  button.name = "" + (radioGroups.length - 1);
  button.disabled = "yes";
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the radio button's text here";
  var newLine = document.createElement("p");

  allElements.push(["radioButton", label, ""]);
  insideThis.appendChild(button);
  insideThis.appendChild(label);
  insideThis.appendChild(newLine);
}



function newCheckbox(){                  //CHECKBOX
  var button = document.createElement("input");
  button.type = "checkbox";
  button.disabled = "yes";
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the checkbox's text here";
  var newLine = document.createElement("p");

  allElements.push(["checkbox", label, ""]);
  insideThis.appendChild(button);
  insideThis.appendChild(label);
  insideThis.appendChild(newLine);
}





function newDateField() {                  //DATE
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the label's text here";
  var input = document.createElement("input");
  input.type = "date";
  input.style.width = "100%";
  input.readOnly = true;

  input.style.backgroundColor = "grey";
  var newLine = document.createElement("p");

  allElements.push(["dateField", label, ""]);
  insideThis.appendChild(label);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);
}




function newTimeField() {                  //DATE
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the label's text here";
  var input = document.createElement("input");
  input.type = "time";
  input.style.width = "100%";
  input.readOnly = true;

  input.style.backgroundColor = "grey";
  var newLine = document.createElement("p");

  allElements.push(["timeField", label, ""]);
  insideThis.appendChild(label);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);
}




function newEmailField() {                  //EMAIL
  var label = document.createElement("p");
  label.innerHTML = "Email:";
  var input = document.createElement("input");
  input.type = "email";
  input.placeholder = "This is a Email Field";
  input.style.width = "100%";
  input.readOnly = true;

  input.style.backgroundColor = "grey";
  var newLine = document.createElement("p");

  insideThis.appendChild(label);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);
}




function newPhoneField() {                  //PHONE
  var label = document.createElement("p");
  label.innerHTML = "Phone:";
  var input = document.createElement("input");
  input.type = "phone";
  input.placeholder = "This is a Phone Field";
  input.style.width = "100%";

  input.style.backgroundColor = "grey";
  var newLine = document.createElement("p");

  insideThis.appendChild(label);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);
}



function newUsernameField() {                 //USERNAME
  var label = document.createElement("p");
  label.innerHTML = "Username:";
  var input = document.createElement("input");
  input.type = "username";
  input.placeholder = "This is a Username Field";
  input.style.width = "100%";

  input.style.backgroundColor = "grey";
  var newLine = document.createElement("p");

  insideThis.appendChild(label);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);
}



function newPasswordField() {                  //PASSWORD
  var label = document.createElement("p");
  label.innerHTML = "Password:";
  var input = document.createElement("input");
  input.type = "password";
  input.placeholder = "This is a Password Field";
  input.style.width = "100%";

  input.style.backgroundColor = "grey";
  var newLine = document.createElement("p");

  insideThis.appendChild(label);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);
}



function saveFormEditor(){

}

//add method that is just interpreting the JSON to the form (not editor)
