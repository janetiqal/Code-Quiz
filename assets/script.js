let question= document.getElementById("question");
let optionA= document.getElementById("optionA");
let optionB= document.getElementById("optionB");
let optionC= document.getElementById("optionC");
let optionD= document.getElementById("optionD");
let startGameButton= document.getElementById("button");
let timer = document.getElementById("timer")

var questionsAndOptions=[
{
"question" : "Which array method mutates the existing array? " ,
"option" :"array.map()",
"option" :"array.slice()",
"option" : "array.splice()",
"option" : "array.concat()",
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
"question" : "Do you see me?",
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
},
{
"question" : "Click me",
"option1" :"answerA",
"option2" :"answerB",
"option3" : "answerC",
"option4" : "aanswerC",
"CorrectAnswer": "answerC"
}]


startGameButton.addEventListener("click", startGame()) ;

function startGame(){
   console.log("letsgo");
   //timer needs to start 
   //call the question/optoins function to populate.
}
function questionPopulate() {
    question.textContent= questionsAndOptions[index].question
   for
};



// I need a function to iterate over the questions array to make this code input all the questions when needed
// console.log(questionsAndOptions[0]);


