let question= document.getElementById("question");
let optionA= document.getElementById("optionA");
let optionB= document.getElementById("optionB");
let optionC= document.getElementById("optionC");
let optionD= document.getElementById("optionD");
 
var questions =["Which array method mutates the existing array? " , "What about this one?", "Do you see me?", "Click me?"]
var options = ["array.map(),array.slice(),array.concat(),array.splice(),array.splice()", "answerA,answerB,answerC,answerD,correctAnswer","answerA,answerB,answerC,answerD,correctAnswer","answerA,answerB,answerC,answerD, correctAnswer"]

// I need a function to iterate over the questions array to make this code input all the questions when needed

question.textContent = questions[0];

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