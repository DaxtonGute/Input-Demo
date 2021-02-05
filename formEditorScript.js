var questions = []; // initializing the array used for the questions accross both 'pages'
var answers = [];   // initializing the array used for the answers accross both 'pages'

var insideEditor = document.getElementById("insideEditor"); // Collects location of div where everything for the editor will be placed

/*
Creates a new text field in the form editor with the required input boxes and specifications.
It also adds this new question to the questions array to be later interpreted for its label and type.
*/
function newTextField() {      
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
  insideEditor.appendChild(label);
  insideEditor.appendChild(deleteButton);
  insideEditor.appendChild(input);
  insideEditor.appendChild(newLine);
}

/*
Creates a new number field in the form editor with the required input boxes and specifications.
It also adds this new question to the questions array to be later interpreted for its label and type.
*/
function newNumberField() {
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
  insideEditor.appendChild(label);
  insideEditor.appendChild(deleteButton);
  insideEditor.appendChild(input);
  insideEditor.appendChild(newLine);
}

/*
Creates a new radio group in the form editor with the required input boxes and specifications.
It also adds this new question to the questions array to be later interpreted for its label and type.
Radio groups primarily act as something to be used to tie radio buttons together.
*/
function newRadioGroup() {
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
  insideEditor.appendChild(label);
  insideEditor.appendChild(deleteButton);
  insideEditor.appendChild(newLine);
}

/*
Creates a new radio button in the form editor with the required input boxes and specifications.
It also adds this new question to the questions array to be later interpreted for its label and type.
*/
function newRadioButton(){
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
  insideEditor.appendChild(radioButton);
  insideEditor.appendChild(label);
  insideEditor.appendChild(deleteButton);
  insideEditor.appendChild(newLine);
}

/*
Creates a new checkbox in the form editor with the required input boxes and specifications.
It also adds this new question to the questions array to be later interpreted for its label and type.
*/
function newCheckbox(){
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
  insideEditor.appendChild(checkButton);
  insideEditor.appendChild(label);
  insideEditor.appendChild(deleteButton);
  insideEditor.appendChild(newLine);
}

/*
Allows the delete button to work on each element so the user can more easily modify the
form editor and questions (it deletes the questions from the questions array)
*/
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

/*
Switches the form from editor mode to view mode and resets
*/
function viewPage(){
  document.getElementById("editor").style.display = "none";
  document.getElementById("preview").style.display = "block";
  document.getElementById("body").style.backgroundColor = "rgb(102,0,204)";
  loadForm();
  while (insideEditor.hasChildNodes()) {
    insideEditor.removeChild(insideEditor.lastChild);
  }
}

/*
Saves the current questions presets. Otherwise, the questions and answers arrays
will be simply ignore
*/
function publishForm(){
  for (var i = 0; i < questions.length; i++) {
    questions[i][1] = questions[i][1].value;
  }
  answers = []; // resets the answers each time a new version comes out
  var formElements = {
    questionsValue: questions,
    answersValue: answers,
  }
  localStorage.setItem("formElements", JSON.stringify(formElements));
}



//this was originally made to be two separate docs
//it is now segmented into the editor and view mode (this upcoming section is the view page)



var formElementIds = [];     // tracks all of the inputs so they can be transfered to answers
var radioGroupElements = []; // a new system for grouping together radio buttons
insideForm = document.getElementById("insideForm");  // Collects location of div where everything for the editor will be placed

/*
Assigns the localstorages values to questions and answers. It then displays the questions
accordinlgy. This is why to press 'publish' above
*/
function loadForm(){
  try{
    var formElements = JSON.parse(localStorage.getItem("formElements"));
    questions = formElements.questionsValue;
    answers = formElements.answersValue;
  }catch{
    questions = [];
    answers = [];
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
}

/*
Displays a text field with appropriate labels and input boxes. It also ids it so the
answers can be recorded later.
*/
function displayTextField(labelText) {
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML = labelText;
  var input = document.createElement("input");
  input.type = "text";
  input.style.width = "100%";
  input.style.margin = "10px 0px";
  var newLine = document.createElement("br");

  insideForm.appendChild(label);
  insideForm.appendChild(input);
  insideForm.appendChild(newLine);

  input.id = labelText+"text"+formElementIds.length;
  formElementIds.push(labelText+"text"+formElementIds.length);
}

/*
Displays a number field with appropriate labels and input boxes. It also ids it so the
answers can be recorded later.
*/
function displayNumberField(labelText) {
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML = labelText;
  var input = document.createElement("input");
  input.type = "number";
  input.style.margin = "10px 0px";
  var newLine = document.createElement("br");

  insideForm.appendChild(label);
  insideForm.appendChild(input);
  insideForm.appendChild(newLine);

  input.id = labelText+"number"+formElementIds.length;
  formElementIds.push(labelText+"number"+formElementIds.length);
}

/*
Displays a radio group with appropriate labels and input boxes. Once again this is mostly
used to group the radio buttons together.
*/
function displayRadioGroup(labelText) {
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML =labelText;
  radioGroupElements.push(labelText);

  insideForm.appendChild(label);
}

/*
Displays a radio button with appropriate labels and input boxes. It also ids it so the
answers can be recorded later.
*/
function displayRadioButton(labelText){
  var radioButton = document.createElement("input");
  var label = document.createElement("label");
  radioButton.type = "radio";
  radioButton.style.margin = "0px 0px 0px 10px";

  radioButton.name = "_" + radioGroupElements.length  + "RadioGroup";
  radioButton.value = labelText;
  label.for = labelText;
  label.innerHTML = labelText;
  var newLine = document.createElement("br");

  insideForm.appendChild(radioButton);
  insideForm.appendChild(label);
  insideForm.appendChild(newLine);

  radioButton.id = labelText+"Radio"+formElementIds.length;
  formElementIds.push(labelText+"Radio"+formElementIds.length);
}

/*
Displays a checkbox with appropriate labels and input boxes. It also ids it so the
answers can be recorded later.
*/
function displayCheckbox(labelText){
  var checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  var label = document.createElement("label");
  checkButton.value = labelText;
  label.for = labelText;
  label.innerHTML = labelText;
  var newLine = document.createElement("br");

  insideForm.appendChild(checkButton);
  insideForm.appendChild(label);
  insideForm.appendChild(newLine);

  checkButton.id = labelText+"Check"+formElementIds.length;
  formElementIds.push(labelText+"Check"+formElementIds.length);
}

/*
Changes the page back from view to edit mode.
*/
function backPage(){
  document.getElementById("editor").style.display = "block";
  document.getElementById("preview").style.display = "none";
  document.getElementById("body").style.backgroundColor = "rgb(255,143,94)";
  while (insideForm.hasChildNodes()) {
    insideForm.removeChild(insideForm.lastChild);
  }
  formElementIds = [];
  questions = [];
}

/*
Saves all of the answers to be used later
*/
function saveForm(){
  for (var i = 0; i < formElementIds.length; i++) {
    var theValue = document.getElementById(formElementIds[i]);
    if (theValue.type == "text"){
      answers[i] = theValue.value;
    }else if (theValue.type == "checkbox" || theValue.type == "radio"){
      answers[i] = theValue.checked;
    }else if (theValue.type == "number"){
      answers[i] = theValue.value;
    }
  }
  var formElements = {
    questionsValue: questions,
    answersValue: answers,
  }
  localStorage.setItem("formElements", JSON.stringify(formElements));
}

/*
Automatically fills in input boxes based on their id and previous saved responses
*/
function autofill(){
  for (var i = 0; i < formElementIds.length; i++) {
    try{
      var theValue = document.getElementById(formElementIds[i]);
      if (theValue.type == "text"){
        theValue.value = answers[i];
      }else if (theValue.type == "checkbox" || theValue.type == "radio"){
        theValue.checked = answers[i];
      }else if (theValue.type == "number"){
        theValue.value = parseInt(answers[i]);
      }
    }catch{
      document.getElementById(formElementIds[i]).value = "undefined";
    }
  }
}
