var insideThis = document.getElementById("inside");

// try{
  var formElements = JSON.parse(localStorage.getItem("formElements"));
  questions = formElements.questions;
  answers = formElements.answers;
// }catch{
//   var questions = [];
//   var answers = [];
// }


for (var i = 0; i < questions.length; i++) {
  var inputName = questions[i][0];
  if(inputName === "textField"){
    newTextField(questions[i][1]);
  }else if(inputName === "numberField"){
    newNumberField(questions[i][1]);
  }else if(inputName === "radioGroup"){
    newRadioGroup(questions[i][1]);
  }else if(inputName === "radioButton"){
    newRadioButton(questions[i][1]);
  }else if(inputName === "checkbox"){
    newCheckbox(questions[i][1]);
  }
}

function newTextField(labelText) {                    //TEXT
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML = labelText;
  var input = document.createElement("input");
  input.type = "text";
  input.style.width = "100%";
  input.style.margin = "10px 0px";
  var newLine = document.createElement("br");

  insideThis.appendChild(label);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);

}



function newNumberField(labelText) {                   //NUMBERS //add the max and min
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML = labelText;
  var input = document.createElement("input");
  input.type = "number";
  input.style.margin = "10px 0px";
  var newLine = document.createElement("br");

  insideThis.appendChild(label);
  insideThis.appendChild(input);
  insideThis.appendChild(newLine);
}



function newRadioGroup(labelText) {                  //RADIOGROUP
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML =labelText;
  var newLine = document.createElement("br");

  insideThis.appendChild(label);
  insideThis.appendChild(newLine);
}



function newRadioButton(labelText){                  //RADIOBUTTON
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

  insideThis.appendChild(radioButton);
  insideThis.appendChild(label);
  insideThis.appendChild(newLine);
}



function newCheckbox(labelText){                  //CHECKBOX
  var checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  checkButton.disabled = "yes";
  var label = document.createElement("p");
  label.style.margin = "10px 0px";
  label.innerHTML = labelText;
  var newLine = document.createElement("br");

  insideThis.appendChild(checkButton);
  insideThis.appendChild(label);
  insideThis.appendChild(newLine);
}

function backPage(){
  window.location = "./formEditor.html";
}

function saveForm(){
  var formElements = {
    questions: questions,
    answers: answers,
  }
  localStorage.setItem("formElements", JSON.stringify(formElements));
}
