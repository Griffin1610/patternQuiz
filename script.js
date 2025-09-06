//this function will first be called after answering question 1
let currentQuestion = 1; //question 1 is already initialy in the html, our first change is to question 2
let answerArray = [];
let score = 0;
function nextQuestion() {
    //add current button selection to answerArray, clear button selection
    const selected = document.querySelector('input[name="quiz-choice"]:checked');
    if(selected){
        answerArray[currentQuestion - 1] = selected.value;
        selected.checked = false;
        console.log(selected.value);
    }
    //go to next question if we are not on queston 10
    if (currentQuestion < 10) {
        currentQuestion++;
    }
    document.getElementById("image").src = `photos/question${currentQuestion}.jpg`;

    //once we reach question ten, calculate and display score
    if (currentQuestion === 10) {
        calculateScore();
    }
}

function previousQuestion() {
    if (currentQuestion >= 2) { //we are atleast on question 2, and can go back
        currentQuestion--;
        document.getElementById("image").src = `photos/question${currentQuestion}.jpg`;
    }
}

function calculateScore() {
    let correctAnswers = ["a","b","c","a","d","c","c","d","b","b"];

    for (let i = 0; i < correctAnswers.length; i++) {
        if (answerArray[i] === correctAnswers[i]) {
        score++;
        }
    }
    alert(`Your score is ${score} out of 10.`);
}