var insideThis = document.getElementById("inside");

try{
  var formElements = localStorage.getItem("formElements");
  questions = formElements[0];
  answers = formElements[1];
}catch{
  var questions = [];
  var answers = [];
}

// add a post to automatically ship data into a field <form action=“formEditor.html” method=“post”>


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
}

function publishForm(){
  var formElements = {
    questions: questions,
    answers: answers,
  }
  localStorage.setItem("formElements", JSON.stringify(formElements));
}

//add method that is just interpreting the JSON to the form (not editor)
