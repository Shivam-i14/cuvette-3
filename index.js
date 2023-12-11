// making choices
const choices = ['rock', 'scissor', 'paper'];


// making computer choices
function pcs() {
    const choices = ['rock', 'scissor', 'paper'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const pcChoice = choices[randomIndex];
    const pcImage = `./icons/${pcChoice}.png`;


    return { choice: pcChoice, image: pcImage };
}






// onClicking images 
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');


// storing scores for the user


let userScore = 0;


// Function to change user score and update local storage


function changeUserScore(uscore) {
    document.getElementById("your-score").innerHTML = uscore;
    localStorage.setItem("userScore", userScore);


}


// storing scores for the pc 


let pcScore = 0;


// // Function to change computer score and update local storage


function changePcScore(pscore) {
    document.getElementById("comp-score").innerHTML = pscore;
    localStorage.setItem("pcScore", pcScore);


}


// Check local storage for existing scores and update


let storedUserScore = localStorage.getItem("userScore");
let storedPcScore = localStorage.getItem("pcScore");


if (storedUserScore !== null) {
    userScore = parseInt(storedUserScore);
    changeUserScore(userScore);
}


if (storedPcScore !== null) {
    pcScore = parseInt(storedPcScore);
    changePcScore(pcScore);
}


// things which will be initially hidden 
document.getElementById('next').style.display = 'none';
document.querySelector('.hurray-page').style.display = 'none';
document.querySelector('.middle-4').style.display = 'none';
document.querySelector('.middle-3').style.display = 'none';
document.querySelector('.middle-2').style.display = 'none';


// code for playing the game


rock.addEventListener("click", function () {
    const userChoices = 'rock'
    const pcResult = pcs();
    const computerChoice = pcResult.choice;
    document.getElementById('playing-section').style.display = 'none';


    if ((userChoices === computerChoice)) {
        document.getElementById('tiePage').style.display = 'flex';
        document.getElementById('userChoiceTie').src = `./icons/first.png`
        document.getElementById('pcChoiceTie').src = `./icons/first.png`
    } else if (
        (userChoices === "rock" && computerChoice === "paper")) {
        document.getElementById('lostPage').style.display = 'flex';
        document.getElementById('userChoiceLost').src = `./icons/first.png`
        document.getElementById('pcChoiceLost').src = `./icons/third.png`
        pcScore++;
        changePcScore(pcScore);
    } else {
        document.getElementById('wonPage').style.display = 'flex';
        document.getElementById('userChoiceWon').src = `./icons/first.png`
        document.getElementById('pcChoiceWon').src = `./icons/second.png`
        document.getElementById('next').style.display = 'flex';
        userScore++;
        changeUserScore(userScore);
    }
});


paper.addEventListener("click", function () {
    const userChoices = 'paper'
    const pcResult = pcs();
    const computerChoice = pcResult.choice;


    document.getElementById('playing-section').style.display = 'none';


    if ((userChoices === computerChoice)) {
        document.getElementById('tiePage').style.display = 'flex';
        document.getElementById('userChoiceTie').src = `./icons/third.png`
        document.getElementById('pcChoiceTie').src = `./icons/third.png`
    } else if ((userChoices === 'paper' && computerChoice === "scissor")) {
        document.getElementById('lostPage').style.display = 'flex';
        document.getElementById('userChoiceLost').src = `./icons/third.png`
        document.getElementById('pcChoiceLost').src = `./icons/second.png`
        pcScore++;
        changePcScore(pcScore);
    } else {
        document.getElementById('wonPage').style.display = 'flex';
        document.getElementById('userChoiceWon').src = `./icons/third.png`
        document.getElementById('pcChoiceWon').src = `./icons/first.png`
        document.getElementById('next').style.display = 'flex';
        userScore++;
        changeUserScore(userScore);
    }
});


scissor.addEventListener("click", function () {
    const userChoices = 'scissor'
    const pcResult = pcs();
    const computerChoice = pcResult.choice;
    document.getElementById('playing-section').style.display = 'none';


    if (userChoices === computerChoice) {
        document.getElementById('tiePage').style.display = 'flex';
        document.getElementById('userChoiceTie').src = `./icons/second.png`
        document.getElementById('pcChoiceTie').src = `./icons/second.png`
    } else if ((userChoices === "scissor" && computerChoice === "rock")) {
        document.getElementById('lostPage').style.display = 'flex';
        document.getElementById('userChoiceLost').src = `./icons/second.png`
        document.getElementById('pcChoiceLost').src = `./icons/first.png`
        pcScore++;
        changePcScore(pcScore);
    } else {
        document.getElementById('wonPage').style.display = 'flex';
        document.getElementById('userChoiceWon').src = `./icons/second.png`
        document.getElementById('pcChoiceWon').src = `./icons/third.png`
        document.getElementById('next').style.display = 'flex';
        userScore++;
        changeUserScore(userScore);
    }
});


/* code for closing the rules section and again displayed when rules button is clicked */
function closeRules() {
    document.querySelector('.rules-sec').style.display = 'none';
}
function ShowRules() {
    document.querySelector('.rules-sec').style.display = 'block';
}
// code for next button 
function nextSection() {
    document.getElementById('wonPage').style.display = 'none';
    document.getElementById('playing-section').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('score-section').style.display = 'none';
    document.getElementById('hurray-section').style.display = 'flex'
}
//code for main page after clicking on play again button of every page
function showMainPage() {
    // Hide unnecessary sections
    document.getElementById('next').style.display = 'none';
    document.getElementById('wonPage').style.display = 'none';
    document.getElementById('lostPage').style.display = 'none';
    document.getElementById('tiePage').style.display = 'none';
    // Show the scorecard and playing section
    document.getElementById('score-section').style.display = 'flex';
    document.getElementById('playing-section').style.display = 'flex';
    // hiding the hurray page
    document.getElementById('hurray-section').style.display = 'none'
    // Show the rules button
    document.getElementById('rules').style.display = 'inline-block';
}


