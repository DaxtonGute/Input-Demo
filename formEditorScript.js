var insideThis = document.getElementById("inside");

function newTextField() {
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

function newUsernameField() { // lots of duplicate code
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

function newPasswordField() { // lots of duplicate code
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
