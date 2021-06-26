let question= document.getElementById("question");
let optionA= document.getElementById("optionA");
let optionB= document.getElementById("optionB");
let optionC= document.getElementById("optionC");
let optionD= document.getElementById("optionD");

var questoinsAndOptions=[
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



function startGame(){
    document.getElementById("button").innerHTML="hi";
}




document.getElementById("button").addEventListener("click", startGame()) ;
function startGame(){
    document.getElementById("button").innerHTML="hi";
}


// I need a function to iterate over the questions array to make this code input all the questions when needed
console.log(questoinsAndOptions[0]);
// question.textContent = questions[0];

// let qOneOptions= options[0];


// console.log(qOneOptions)
// console.log(typeof qOneOptions)
// console.log(questionOne);

function answerOptions (){
     splitOptions = options.split(",");
     console.log(splitOptions)
      
};

function questionPopulate (){
    for (let i= 0; i< questions.length; i++){
    // questionOne = questions[i];
    // question.textContent = questionOne;
    question.textContent = questions[i];
    console.log(questions[i]);
    console.log(questionOne);
}

    singleQuestions = questions.indexof[0].split(",");
    console.log(singleQuestions);
};

//Which array method mutates the existing array? array.map(), array.slice(), array.concat(), array.splice()
// Arrays can be used to store
//What is a function used for?