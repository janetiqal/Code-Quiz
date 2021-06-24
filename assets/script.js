const question= document.getElementById("question");
const optionA= document.getElementById("optionA");
const optionB= document.getElementById("optionB");
const optionC= document.getElementById("optionC");
const optionD= document.getElementById("optionD");
 
var questions =["Will this show up?" , "What about this one?", "Do you see me?", "Click me?"]
var options = ["answerA,answerB,answerC,answerD,correctAnswer", "answerA,answerB,answerC,answerD,correctAnswer","answerA,answerB,answerC,answerD,correctAnswer","answerA,answerB,answerC,answerD, correctAnswer"]

let questionOne = questions[0]
let qOneOptions= options[0]

console.log(qOneOptions)
console.log(typeof qOneOptions)
