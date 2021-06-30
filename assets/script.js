var question = document.getElementById("question");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
const optionContainer = document.getElementsByClassName("option");
const parentDiv = document.getElementById("allOptions");
const instructions = document.getElementById("instructions");
const startGameButton = document.getElementById("button");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
let scoreCount = 0;
let timeStart = 75;
let index = 0;
const inputField = document.getElementById("formField");
const clearInputValue = document.getElementById("clearbtn");

//var array with questions and answers. can add any amount of questions you'd like. change time depending on additions
var questionsAndOptions = [
    {
        "question": "Which array method mutates the existing array? ",
        "option1": "array.map()",
        "option2": "array.slice()",
        "option3": "array.splice()",
        "option4": "array.concat()",
        "CorrectAnswer": "array.splice()"
    },
    {
        "question": "What can arrays store?",
        "option1": "Boolean Values",
        "option2": "Objects",
        "option3": "Strings",
        "option4": "All of the above",
        "CorrectAnswer": "All of the above"
    },
    {
        "question": "How do you properly call a function?",
        "option1": "function.()",
        "option2": "function{}",
        "option3": "function()",
        "option4": "function({})",
        "CorrectAnswer": "function()"
    },
    {
        "question": "Choose the answer that portrays proper camel casing.",
        "option1": "HelloIsThisCorrect",
        "option2": "HelloisthiscorrecT",
        "option3": "helloISthiscorrect",
        "option4": "helloIsThisCorrect",
        "CorrectAnswer": "helloIsThisCorrect"
    },
    {
        "question": "hello me",
        "option1": "answerA",
        "option2": "answerB",
        "option3": "answerC",
        "option4": "aanswerC",
        "CorrectAnswer": "answerC"
    }]


startGameButton.addEventListener("click", startGame);
//hiding the highscore/intial input form until the game ends
inputField.style.display = "none";

function startGame() {
    countdown();
    questionPopulate();
    instructions.style.display = "none";
    startGameButton.style.display = "none";
    inputField.style.display = "none";
    for (let i = 0; i < optionContainer.length; i++)
        optionContainer[i].setAttribute("style", "border:1px solid black; border-radius:8px; margin:5px auto; width:50%; padding:5px; font-size:32px;")
}
//this populates each question and its options at their div in the html
//questions are being indexed and the text of each questions is being assigned to their corresponding key values in the array
function questionPopulate() {

    question.textContent = questionsAndOptions[index].question;
    optionA.textContent = questionsAndOptions[index].option1;
    optionB.textContent = questionsAndOptions[index].option2;
    optionC.textContent = questionsAndOptions[index].option3;
    optionD.textContent = questionsAndOptions[index].option4;
//each option div has an event listener.
    optionA.addEventListener("click", answerCheck)
    optionB.addEventListener("click", answerCheck)
    optionC.addEventListener("click", answerCheck)
    optionD.addEventListener("click", answerCheck)
};

function answerCheck(event) {
    //this is how I compare what the user selected to determine if they chose the right or wrong anser
    var userSelected = event.target.textContent;
    console.log(event.target.textContent)

    let rightAnswer = questionsAndOptions[index].CorrectAnswer;
    console.log(rightAnswer)
    console.log(`index value ${index}`)
    //this allows for user to see if they chose the correct or wrong answer.
    var displayAnswer = document.getElementById("displayAnswer");
    if (userSelected === rightAnswer) {
        scoreCount += 1;
        console.log("correct");
        index++;
        //needed this nested if statement because the questionPopulate function throws an error in the console because it trys to populate even after there are no more questions. 
        if(index <questionsAndOptions.length){
            questionPopulate();
            displayAnswer.textContent = ("Correct!");
        }
        console.log(`the score value ${scoreCount}`)
    } 
    else {
        console.log("wrong answer")
        timeStart -= 10;
        index++;
        displayAnswer.textContent = (`Wrong! Correct answer is ${rightAnswer}`);
        questionPopulate();
    }
};
//this function controls the 
function countdown() {
    let timeInterval = setInterval(function () {
        timer.textContent = `Time Left: ${timeStart}`;
        timeStart--;
        if (timeStart < 0 || index === questionsAndOptions.length) {
            clearInterval(timeInterval);
            timer.textContent = "";
            console.log(scoreCount);
            score.textContent = `Your Score is ${scoreCount}`;
            inputField.setAttribute("style", "border:2px solid black; margin:5px auto; width:50%; padding:5px;display:flex; flex-direction:column")
            parentDiv.style.display="none";
        }
    }, 1000);
}

//This function shows the user their saved initials and score after inputting.
function displayFormInput(message) {
    var inputValues = document.getElementById("renderedmessage")
    inputValues.textContent = message;
};
//setting up the input values from the form and saving them to local storage 
//input for user intitals and user score are saved. 
// upon submitting the form, user can check and see if their score has been saved to local storage. message will appear to let them know their info has been saved when properly filling out the form. 
const submitUserForm = document.getElementById("submit");
submitUserForm.addEventListener("click", function renderForm(event) {
    event.preventDefault();
    var initialsInput = document.getElementById("initials").value;
    var highScoreInput = document.getElementById("HighScore").value;
    
    if (initialsInput === "") {
        alert("Initals can not be blank")
    }
    else if ((highScoreInput === "")) {
        alert("High Score can not be blank")
    }
    else {
        displayFormInput(`Initals ${initialsInput} and score of ${highScoreInput} have been saved.`);
        localStorage.setItem("Initials", initialsInput)
        localStorage.setItem("HighScore", highScoreInput)
        populateStorage();
    }
});
//getting items from local storage
function populateStorage() {
    var userInitials = document.getElementById("user-initials")
    var userInitialsStorage = localStorage.getItem("initialLabel");
    userInitials.textContent = userInitialsStorage;

    var userScore = document.getElementById("user-score")
    var scoreStorage = localStorage.getItem("scoreLabel");
    userScore.textContent = scoreStorage;
};