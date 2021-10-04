# Code Quiz
# Name of Assignment 
Code Quiz Homework-4
# Purpose
The purpose of this assignment is to build a coding quiz with questions with multiple answer options for users to test their coding knowledge. This assignment requires knowledge of HTML, CSS, Javascript and Web API's to build a functional, responsive quiz. After a question has been answered the next question should display on the screen. If the user gets a question wrong, time is deducted. If a question is answered correctly a point is added to the users score. When the time runs out or if the user answers all the questions--the user is able to save his/her initials and highscore. 
# My Experience
The first thing I did was structure my html to create the layout of the code quiz. I created a header, tile, and mutlpiple div tags to place the question and the questions answers. I then created variables for them for me to refrence in my javascript file. I built an array called questionsAndOptions that contained a question and the options and correct answer. I knew I could iterate over the questions/answer using their index vaules to propogate through the questions. 
Once I figured out how to get my questions to populate after being answered, I knew I should create a start game button and add instructions on how to play the game. I added a button and a p tag in my html. I added an even listener to te start game button and created a function called startGame();--there I was able to added the questionPopulate function. I hid the instructions and the start button when the button was clicked. I also styled the answer options in my javascript file.
I then knew I needed to check the users pick and compare it to the right answer to determine if the user gets a point or if the user loses 10 seconds of quiz time. I created the function answerCheck with an event that checks what the user picks based on the text content of the choice. Each question has a right answer with the key name CorrectAnswer. So I created an if statement to determine if the user choice was strictly equal to the the right answer. If it was user is alerted Correct! and score increase by one point,  the index increases and the next question populates. If the question was answered incorrectly all else is true but user loses 10 seconds of time and the user is notified what the correct answer is. I created the variables as I went, it was easier to then trying to figure out all the variables I needed before coding.

I then created a timer element that was called in the start game function. Timer ends when time has run out or the user finishes answering all the questions. The interval is cleaered, timer is removed from the page and the user is given their score value. I also set the display to none on the questions and answer div element so that all that was left on the screen was the input form for the user to input their initials and high score to be saved in local storage.

Setting up the local storage function was the last thing I did. 
I was overwhelmed when I first started this project. I did not know where to start but I just realized I needed to start with something small that I knew I could get working or showing up on the browser that I could build on top of. For me that was the html, building a skeleton structure of where the questions would be and options, giving the page a header. Then I created my questions and variables array and linked them to the div tags from the html. That was the key to my success with this assignment.
# Link to App
https://github.com/janetiqal/Homework-04
# Screen Shots 
<img width="1088" alt="Screen Shot 2021-06-30 at 9 40 00 PM" src="https://user-images.githubusercontent.com/84414488/124056799-fff94400-d9eb-11eb-820f-20e6bb8add48.png">
<img width="1088" alt="Screen Shot 2021-06-30 at 9 42 27 PM" src="https://user-images.githubusercontent.com/84414488/124057003-56668280-d9ec-11eb-9c8c-e663f9529e44.png">
<img width="1089" alt="Screen Shot 2021-06-30 at 9 43 00 PM" src="https://user-images.githubusercontent.com/84414488/124057070-6d0cd980-d9ec-11eb-9c1a-d00f2d87bb0c.png">
# Created By
Janet Iqal
