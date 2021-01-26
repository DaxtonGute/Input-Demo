var insideThis = document.getElementById("inside");

function newTextField() {                    //TEXT
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the label's text here"
  var newLineOne = document.createElement("br");
  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "This is a Text Field";
  input.style.width = "100%";
  input.readOnly = true;
  input.style.backgroundColor = "grey";
  var newLineTwo = document.createElement("p");

  insideThis.appendChild(label);
  insideThis.appendChild(newLineOne);
  insideThis.appendChild(input);
  insideThis.appendChild(newLineTwo);
}



function newNumberField() {                   //NUMBERS
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the label's text here"
  var min = document.createElement("input");
  min.type = "number";
  min.placeholder = "min"
  min.style.width = "100px";
  var max = document.createElement("input");
  max.type = "number";
  max.placeholder = "max";
  max.style.width = "100px";

  var newLineOne = document.createElement("br");
  var input = document.createElement("input");
  input.type = "number";
  input.placeholder = "This is a Number Field";
  input.readOnly = true;
  input.style.backgroundColor = "grey";
  var newLineTwo = document.createElement("p");

  insideThis.appendChild(label);
  insideThis.appendChild(min);
  insideThis.appendChild(max);
  insideThis.appendChild(newLineOne);
  insideThis.appendChild(input);
  insideThis.appendChild(newLineTwo);
}



function newUsernameField() {                 //USERNAME
  var label = document.createElement("p");
  label.innerHTML = "Username:";
  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "This is a Username Field";
  input.style.width = "100%";
  input.readOnly = true;
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
  input.type = "text";
  input.placeholder = "This is a Password Field";
  input.style.width = "100%";
  input.readOnly = true;
  input.style.backgroundColor = "grey";
  var newLine = document.createElement("p");

  insideThis.appendChild(label);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);
}
