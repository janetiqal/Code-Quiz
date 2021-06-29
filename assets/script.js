const question= document.getElementById("question");
const optionA= document.getElementById("optionA");
const optionB= document.getElementById("optionB");
const optionC= document.getElementById("optionC");
const optionD= document.getElementById("optionD");
const optionContainer = document.getElementsByClassName("option");
const parentDiv = document.getElementById("allOptions");
const instructions =document.getElementById("instructions");
const startGameButton= document.getElementById("button");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
let scoreCount = 0;
let timeStart = 75;
let index = 0;
const inputField =document.getElementById("formField");
const clearInputValue =document.getElementById("clearbtn")

//var array with questions and answers. can add any amount of questions you'd like. change time depending on additions
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


startGameButton.addEventListener("click", startGame);
//hiding the highscore/intial input form until the game ends
inputField.style.display= "none";

function startGame(){
   countdown();
   questionPopulate();
   instructions.style.display="none" ;
   startGameButton.style.display = "none";
   inputField.style.display= "none";
   for (var i = 0; i < optionContainer.length; i++) 
   optionContainer[i].setAttribute("style", "border:1px solid black; margin:5px auto; width:50%; padding:5px")
}

function questionPopulate() {
  
    question.textContent=questionsAndOptions[index].question;
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
    // console.log(event.target.textContent)
    let userSelected= event.target.textContent;
    let rightAnswer = questionsAndOptions[index].CorrectAnswer;
    console.log(rightAnswer)
    console.log(`index value ${index}`)
    var displayAnswer = document.getElementsByClassName("displayAnswer");
    if (userSelected === rightAnswer){
        rightAnswer.setAttribute("class", "demo");
        scoreCount+=1;
        console.log("correct");
        index++;
        console.log(`the score value ${scoreCount}`)
        displayAnswer.textContent= ("Correct!")
        // rightAnswer.setAttribute("class", "demo");
    }
    else { 
        console.log("wrong answer")
        // userSelected.setAttribute("style", "border:1px solid red")
        //style button to be red.
        timeStart -= 10;
        //display right answer 
        index++;
        displayAnswer.textContent= (`Wrong! Correct answer is ${rightAnswer}`);
    }
    
};

function countdown (){
    let timeInterval = setInterval(function(){
    timer.textContent= `Time Left: ${timeStart}`;
    timeStart--;
    if (timeStart < 0 || index === questionsAndOptions.length){
        clearInterval(timeInterval);
        timer.textContent="";
        console.log(scoreCount);
        score.textContent= `Your Score is ${scoreCount}`;
        inputField.setAttribute("style", "border:2px solid black; margin:5px auto; width:50%; padding:5px;display:flex; flex-direction:column")
        //clear the questions
        parentDiv.setAttribute("class", "hide");
    }
    },1000);
}
// need to do the local storage.

function displayFormInput(message){
    var inputValues =document.getElementById("renderedmessage")
    inputValues.textContent=message;
    // inputValues.setAttribute= ("class", type); //NOT SURE WHAT THIS MEANS PREVI. EXAMPLE HAD (TYPE, MESAGE)
};

function populateStorage(){  
    var userInitials = document.getElementById("user-initials")
    var userInitialsStorage =localStorage.getItem("initialLabel");
    userInitials.textContent= userInitialsStorage;
    
    var userScore = document.getElementById("user-score") 
    var scoreStorage = localStorage.getItem("scoreLabel");
    userScore.textContent=scoreStorage;
};

const submitUserForm=document.getElementById("submit");  
submitUserForm.addEventListener("click", function renderForm(event){
    event.preventDefault();
    var initialsInput = document.getElementById("initials").value;
    var highScoreInput =document.getElementById("HighScore").value;

   if (initialsInput === ""){
    displayFormInput("Initals can not be blank")
    }
    else if((highScoreInput ==="")) {
        displayFormInput("High Score can not be blank")
    }
    else{
        displayFormInput(`Initals ${initialsInput} and score of ${highScoreInput} have been saved.`);
        localStorage.setItem("Initials",initialsInput )
        localStorage.setItem("HighScore",highScoreInput)
    //create function to call back previous users high scores and initials
    populateStorage();
    }
});
// clearInputValue.addEventListener("click", function(){
//     initialsInput.innerHTML
// })

//increment the index and go to the next question, content on page isnt switching questions

