
var insideThis = document.getElementById("inside");
var questions = [];
var answers = [];

function loadForm(){
  try{
    var formElements = JSON.parse(localStorage.getItem("formElements"));
    questions = formElements.questionsValue;
    answers = formElements.answersValue;
    console.log(questions);
  }catch{
    var questions = [];
    var answers = [];
  }
  for (var i = 0; i < questions.length; i++) {
    var inputName = questions[i][0];
    if(inputName === "textField"){
      displayTextField(questions[i][1]);
    }else if(inputName === "numberField"){
      displayNumberField(questions[i][1]);
    }else if(inputName === "radioGroup"){
      displayRadioGroup(questions[i][1]);
    }else if(inputName === "radioButton"){
      displayRadioButton(questions[i][1]);
    }else if(inputName === "checkbox"){
      displayCheckbox(questions[i][1]);
    }
  }
  console.log(questions);
}


function newTextField() {                    //TEXT
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the label's text here";
  label.style.margin = "10px 0px";
  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "This is a Text Field";
  input.style.width = "100%";
  input.readOnly = true;
  input.style.backgroundColor = "grey";
  input.style.margin = "10px 0px";
  var deleteButton = document.createElement("button");
  deleteButton.style.backgroundColor = "red";
  deleteButton.innerHTML = "X";
  deleteButton.onclick = function() {this.remove();deleteElement(this.className);};
  var newLine = document.createElement("br");

  questionsLength = questions.length;
  label.className = "_" + questionsLength;
  deleteButton.className = "_" + questionsLength;
  input.className = "_" + questionsLength;
  newLine.className = "_" + questionsLength;

  questions.push(["textField", label]);
  insideThis.appendChild(label);
  insideThis.appendChild(deleteButton);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);

}


function newNumberField() {                   //NUMBERS //add the max and min
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the label's text here";
  label.style.margin = "10px 0px";
  var input = document.createElement("input");
  input.type = "number";
  input.placeholder = "This is a Number Field";
  input.readOnly = true;
  input.style.backgroundColor = "grey";
  input.style.margin = "10px 0px";
  var deleteButton = document.createElement("button");
  deleteButton.style.backgroundColor = "red";
  deleteButton.innerHTML = "X";
  deleteButton.onclick = function() {this.remove();deleteElement(this.className);};
  var newLine = document.createElement("br");

  questionsLength = questions.length;
  label.className = "_" + questionsLength;
  deleteButton.className = "_" + questionsLength;
  input.className = "_" + questionsLength;
  newLine.className = "_" + questionsLength;

  questions.push(["numberField", label]);
  insideThis.appendChild(label);
  insideThis.appendChild(deleteButton);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);
}



function newRadioGroup() {                  //RADIOGROUP
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the radio group's text here";
  label.style.margin = "10px 0px";
  var deleteButton = document.createElement("button");
  deleteButton.style.backgroundColor = "red";
  deleteButton.innerHTML = "X";
  deleteButton.onclick = function() {this.remove();deleteElement(this.className);};
  var newLine = document.createElement("br");

  questionsLength = questions.length;
  label.className = "_" + questionsLength;
  deleteButton.className = "_" + questionsLength;
  newLine.className = "_" + questionsLength;

  questions.push(["radioGroup", label]);
  insideThis.appendChild(label);
  insideThis.appendChild(deleteButton);
  insideThis.appendChild(newLine);
}



function newRadioButton(){                  //RADIOBUTTON
  var radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.style.margin = "0px 0px 0px 10px";
  lastRadioGroup = 0;
  for (var i = 0; i < questions.length; i++) {
    if(questions[i][0] === "radioGroup"){
      lastRadioGroup = i;
    }
  }
  radioButton.name = "" + lastRadioGroup;
  radioButton.disabled = "yes";
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the radio button's text here";
  label.style.margin = "10px 0px";
  var deleteButton = document.createElement("button");
  deleteButton.style.backgroundColor = "red";
  deleteButton.innerHTML = "X";
  deleteButton.onclick = function() {this.remove();deleteElement(this.className);};
  var newLine = document.createElement("br");

  questionsLength = questions.length;
  radioButton.className = "_" + questionsLength;
  label.className = "_" + questionsLength;
  deleteButton.className = "_" + questionsLength;
  newLine.className = "_" + questionsLength;

  questions.push(["radioButton", label]);
  insideThis.appendChild(radioButton);
  insideThis.appendChild(label);
  insideThis.appendChild(deleteButton);
  insideThis.appendChild(newLine);
}



function newCheckbox(){                  //CHECKBOX
  var checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  checkButton.disabled = "yes";
  var label = document.createElement("input");
  label.type = "text";
  label.placeholder = "Put the checkbox's text here";
  label.style.margin = "10px 0px";
  var deleteButton = document.createElement("button");
  deleteButton.style.backgroundColor = "red";
  deleteButton.innerHTML = "X";
  deleteButton.onclick = function() {this.remove();deleteElement(this.className);};
  var newLine = document.createElement("br");

  questionsLength = questions.length;
  checkButton.className = "_" + questionsLength;
  deleteButton.className = "_" + questionsLength;
  label.className = "_" + questionsLength;
  newLine.className = "_" + questionsLength;

  questions.push(["checkbox", label]);
  insideThis.appendChild(checkButton);
  insideThis.appendChild(label);
  insideThis.appendChild(deleteButton);
  insideThis.appendChild(newLine);
}

function deleteElement(index){
  var classElement = document.querySelectorAll("."+index);
  for (var i = 0; i < classElement.length; i++) {
    classElement[i].remove();
  }
  questions.splice(Number(index), 1);
  for (var i = Number(index); i < questions.length; i++) {
    var classElement = document.querySelectorAll("._" + (i+1));
    for (var j = 0; j < classElement.length; j++) {
      classElement[i].className = i.toString();
    }
  }

}

function viewPage(){
  document.getElementById("editor").style.display = "none";
  document.getElementById("preview").style.display = "block";
  document.getElementById("body").style.backgroundColor = "rgb(102,0,204)";
  loadForm();
}

function publishForm(){
  for (var i = 0; i < questions.length; i++) {
    questions[i][1] = questions[i][1].value;
  }
  var formElements = {
    questionsValue: questions,
    answersValue: answers,
  }
  localStorage.setItem("formElements", JSON.stringify(formElements));
}



//this was originally made to be two separate docs



var formElementIds = [];
insideThat = document.getElementById("insideForm");

function displayTextField(labelText) {                    //TEXT
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML = labelText;
  var input = document.createElement("input");
  input.type = "text";
  input.style.width = "100%";
  input.style.margin = "10px 0px";
  var newLine = document.createElement("br");

  insideThat.appendChild(label);
  insideThat.appendChild(input);
  insideThat.appendChild(newLine);

  input.id = labelText+"text"+formElementIds.length;
  formElementIds.push(labelText+"text"+formElementIds.length);

}


function displayNumberField(labelText) {                   //NUMBERS //add the max and min
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML = labelText;
  var input = document.createElement("input");
  input.type = "number";
  input.style.margin = "10px 0px";
  var newLine = document.createElement("br");

  insideThat.appendChild(label);
  insideThat.appendChild(input);
  insideThat.appendChild(newLine);

  input.id = labelText+"number"+formElementIds.length;
  formElementIds.push(labelText+"number"+formElementIds.length);
}



function displayRadioGroup(labelText) {                  //RADIOGROUP
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML =labelText;
  var newLine = document.createElement("br");

  insideThat.appendChild(label);
  insideThat.appendChild(newLine);
}



function displayRadioButton(labelText){                  //RADIOBUTTON
  var radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.style.margin = "0px 0px 0px 10px";
  lastRadioGroup = 0;
  for (var i = 0; i < questions.length; i++) {
    if(questions[i][0] === "radioGroup"){
      lastRadioGroup = i;
    }
  }
  radioButton.name = "" + lastRadioGroup;
  radioButton.disabled = "yes";
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML = labelText;
  var newLine = document.createElement("br");

  insideThat.appendChild(radioButton);
  insideThat.appendChild(label);
  insideThat.appendChild(newLine);

  input.id = labelText+"Radio"+formElementIds.length;
  formElementIds.push(labelText+"Radio"+formElementIds.length);
}



function displayCheckbox(labelText){                  //CHECKBOX
  var checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  checkButton.disabled = "yes";
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML = labelText;
  var newLine = document.createElement("br");

  insideThat.appendChild(checkButton);
  insideThat.appendChild(label);
  insideThat.appendChild(newLine);

  input.id = labelText+"Check"+formElementIds.length;
  formElementIds.push(labelText+"Check"+formElementIds.length);
}

function backPage(){
  document.getElementById("editor").style.display = "block";
  document.getElementById("preview").style.display = "none";
  document.getElementById("body").style.backgroundColor = "rgb(255,143,94)";
}

function saveForm(){
  for (var i = 0; i < formElementIds.length; i++) {
    answers[i] = document.getElementById(formElementIds[i]).value;
  }
  var formElements = {
    questionsValue: questions,
    answersValue: answers,
  }
  localStorage.setItem("formElements", JSON.stringify(formElements));
}

function autofill(){
  for (var i = 0; i < formElementIds.length; i++) {
    document.getElementById(formElementIds[i]).value = answers[i];
  }
}
