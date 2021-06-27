let question= document.getElementById("question");
let optionA= document.getElementById("optionA");
let optionB= document.getElementById("optionB");
let optionC= document.getElementById("optionC");
let optionD= document.getElementById("optionD");
let optionContainer = document.getElementsByClassName("option")
let startGameButton= document.getElementById("button");
let timer = document.getElementById("timer")
let index =0 ;
let score = document.getElementById("score")
score = 0;

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
"question" : "Choose the answer that portrays proper camel casing.",
"option1" :"HelloIsThisCorrect",
"option2" :"HelloisthiscorrecT",
"option3" : "helloISthiscorrect",
"option4" : "helloIsThisCorrect",
"CorrectAnswer": "helloIsThisCorrect"
},
{
"question" : "hello me",
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
   //button needs to go away. 
   
}
function questionPopulate() {
    question.textContent= questionsAndOptions[index].question;
    optionA.textContent=questionsAndOptions[index].option1;
    optionB.textContent=questionsAndOptions[index].option2;
    optionC.textContent=questionsAndOptions[index].option3;
    optionD.textContent=questionsAndOptions[index].option4;

    // optionContainer.addEventListener("click", answerCheck)
    optionA.addEventListener("click", answerCheck)
    optionB.addEventListener("click", answerCheck)
    optionC.addEventListener("click", answerCheck)
    optionD.addEventListener("click", answerCheck)
    // optionA.onclick = answerCheck();
    // optionB.onclick = answerCheck();
    // optionC.onclick = answerCheck();
    // optionD.onclick = answerCheck();
//how do i record what the user selects?
//data-state?
    index++;
};
 function answerCheck(){
    let userSelected = ;
    let rightAnswer = questionsAndOptions[index].CorrectAnswer;
    if (rightAnswer){
    score += 1;
    console.log("correct")
    //style button to be green 
    }
    else { 
        console.log("wrong answer")
        //style button to be red.
        //timer deducts 10 seconds
    }
};



// add event listener for each of those options 
//create a function to check if the answer selected === questionsAndOptions[index].CorrectAnswer;
//increment the index and go to the next question 

