var insideThis = document.getElementById("inside");

function newTextField() {
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the label's text here"
  var newLineOne = document.createElement("br");
  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "don't type here";
  input.style.width = "100%";
  var newLineTwo = document.createElement("p");

  insideThis.appendChild(label);
  insideThis.appendChild(newLineOne);
  insideThis.appendChild(input);
  insideThis.appendChild(newLineTwo);

}
