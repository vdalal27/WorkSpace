/* Global variables just for easy practice */

// An array of objects containing questions and answers
questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language."
  },
  {
    question: "Give the selector and rule to color all paragraph text blue.",
    answer: "p {color: blue;}"
  },
  {
    question:
      "How are heading elements similar and different from the header element?",
    answer:
      "the header element is a container and can contain multiple elements. In addition it is good and commont practice to include a heading element within a header element."
  },
  {
    question:
      "When would you want to use an article element and when would this generally not be necessary?",
    answer: "To be written..."
  }
];

// Initial question to display
qIndex = 0;
// Set up variables to hold element references

// Example of variables and initialization
qCountSpan = document.getElementById("qCount");
qIndexSpan = document.getElementById("qIndex");
contentQP = document.createElement("p");
contentAP = document.createElement("p");

AddQA = document.getElementById("BAddQ");
removeQA = document.getElementById("BRemove");
questionCreator = document.getElementById("BShowQC");
forward = document.getElementById("BForward");
showAnswer = document.getElementById("BShow");
back = document.getElementById("BBack");
hideA = document.getElementById("BHideA");
hideC = document.getElementById("BHideQC");
// Initialize content
qCountSpan.innerHTML = questions.length;
qIndexSpan.innerHTML = qIndex + 1;
// document.getElementById("Question").value = "here";
showQA();
// initialize buttons
initButtons();
/* Functions defined below here */

/* Attach buttons to their handler functions here. Button id:
 BForward BBack BShow BShowQC BRemove BHideA BAddQ BHideQC */
function initButtons() {
  contentQ = document.getElementById("contentQ");
  contentA = document.getElementById("contentA");
  contentQ.appendChild(contentQP);
  contentA.appendChild(contentAP);

  AddQA.addEventListener("click", addQuestion);
  removeQA.addEventListener("click", removeQuestion);
  questionCreator.addEventListener("click", showAnswertoggle);
  forward.addEventListener("click", forwardQ);
  showAnswer.addEventListener("click", toggling);
  back.addEventListener("click", backQ);
  hideA.addEventListener("click", hideAnswer);
  hideC.addEventListener("click", hideQC);
  // Show and hide creator
  // Show and hide answer
  // Forward and back Questions
  // Remove question
  // Add question
}

/* You may want to define functions like the following to attach to buttons */
function showQA(){
  
  contentQP.innerHTML = questions[qIndex].question;
	questionNode = document.createTextNode(questions[qIndex].question);

  answerNode = document.createTextNode(questions[qIndex].answer);

  contentQP.appendChild(questionNode);

  contentAP.appendChild(answerNode);
  // questionNode.innerHTML;
}
/* Takes the content from the text areas and adds
 to the quesiton list */
function addQuestion() {
  qIndexSpan.innerHTML = questions.length+1;
  var QuestionText = document.getElementById("Question").value;
  var AnswerText = document.getElementById("Answer").value;
  questions.push({
    question: QuestionText,
    answer: AnswerText
  });

  contentQ.innerHTML = QuestionText;
  contentA.innerHTML = AnswerText;
  qCountSpan.innerHTML = questions.length;
}

function removeQuestion(){
  if(qIndexSpan.innerHTML<questions.length){
    var removeQuest = questions.splice(qIndex, 1);
    contentQ.innerHTML = questions[qIndex].question;
    contentA.innerHTML = questions[qIndex].answer;
    qCountSpan.innerHTML = questions.length;
  }
  else{
      var removeQuest = questions.splice(qIndex, 1);
      contentQ.innerHTML = questions[0].question;
      contentA.innerHTML = questions[0].answer;
      qCountSpan.innerHTML = questions.length;
      qIndex = 1;
      qIndexSpan.innerHTML = qIndex;
}
}
function toggling(){
  document.getElementById("currentA").classList.toggle("hideAnswer");

  // contentA.innerHTML = questions[qIndex].answer;

  // const el = document.getElementById('contentA');
  // el.className = "hideStuff";
  // console.log(el.innerHTML);
  // el.classList.toggle("hideStuff");
}

function showAnswertoggle(){
  document.getElementById("QCreator").classList.toggle("hideStuff");
  // const e = document.getElementById('Answer');
  // e.className = "hideAnswer";
  // console.log(e.outerHTML);
  // e.classList.toggle("showAnswer");
  // qCountSpan.innerHTML = questions.length;
}
function hideAnswer(){
  document.getElementById("currentA").classList.toggle("hideAnswer");
}
function hideQC(){
  document.getElementById("QCreator").classList.toggle("hideStuff");
}

function forwardQ(){
  if(qIndexSpan.innerHTML<questions.length){
    qIndex++;
    contentQ.innerHTML = questions[qIndex].question; 
    contentA.innerHTML = questions[qIndex].answer;
    qIndexSpan.innerHTML = qIndex + 1;
  }
  else{
    contentQ.innerHTML = questions[0].question; 
    contentA.innerHTML = questions[0].answer;
    qIndex = 1;
    qIndexSpan.innerHTML = qIndex;
  }
  
}

function backQ(){
  qIndex--;
  contentQ.innerHTML = questions[qIndex].question; 
  contentA.innerHTML = questions[qIndex].answer;
  qIndexSpan.innerHTML = qIndex + 1;
  
}
