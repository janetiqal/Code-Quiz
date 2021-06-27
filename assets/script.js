let question= document.getElementById("question");
let optionA= document.getElementById("optionA");
let optionB= document.getElementById("optionB");
let optionC= document.getElementById("optionC");
let optionD= document.getElementById("optionD");
let startGameButton= document.getElementById("button");
let timer = document.getElementById("timer")
let index =0 ;

var questionsAndOptions=[
{ 
"question" : "Which array method mutates the existing array? " ,
"option1" :"array.map()",
"option2" :"array.slice()",
"option3" : "array.splice()",
"option4" : "array.concat()",
"CorrectAnswer": "array.splice()"
},
{
"question" : "What can arrays store?",
"option1" :"Boolean Values",
"option2" :"Objects",
"option3" : "Strings",
"option4" : "All of the above",
"CorrectAnswer": "All of the above"
},
{
"question" : "How do you properly call a function?",
"option1" :"function.()",
"option2" :"function{}",
"option3" : "function()",
"option4" : "function({})",
"CorrectAnswer": "function()"
},
{
"question" : "Click me",
"option1" :"answerA",
"option2" :"answerB",
"option3" : "answerC",
"option4" : "aanswerC",
"CorrectAnswer": "answerC"
},
{
"question" : "Click me",
"option1" :"answerA",
"option2" :"answerB",
"option3" : "answerC",
"option4" : "aanswerC",
"CorrectAnswer": "answerC"
}]


startGameButton.addEventListener("click", startGame) ;

function startGame(){
   console.log("letsgo");
   questionPopulate();
   
   //timer needs to start 
   //call the question/optoins function to populate.
}
function questionPopulate() {
    question.textContent= questionsAndOptions[index].question;
    optionA.textContent=questionsAndOptions[index].option1;
    optionB.textContent=questionsAndOptions[index].option2;
    optionC.textContent=questionsAndOptions[index].option3;
    optionD.textContent=questionsAndOptions[index].option4;

    optionA.addEventListener("click", answerCheck)
    optionB.addEventListener("click", answerCheck)
    optionC.addEventListener("click", answerCheck)
    optionD.addEventListener("click", answerCheck)
};
function answerCheck(event){
    if 
};
// add event listener for each of those options 
//create a function to check if the answer selected === questionsAndOptions[index].correctAnwer;
//incremeent the index and go to the next question 

// "CorrectAnswer": "array.splice()"

