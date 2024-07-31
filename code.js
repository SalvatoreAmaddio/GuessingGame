let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let message = document.getElementById('message');
let help = document.getElementById('help_p');
let remember = document.getElementById("remember");
let attemptDisplayer = document.getElementById('attempts');
let guessInput = document.getElementById('guess-input');

document.getElementById('guess-button').addEventListener('click', checkGuess);
document.getElementById('restart-button').addEventListener('click', restartGame);

function checkGuess() {

    const guess = Number(guessInput.value);

    if (guess === randomNumber) 
    {
        message.innerText = 'Congratulations! You guessed the correct number! Restart the game to play again.';
        disableGame();
        return;
    } 
    else if (guess < randomNumber) 
    {
        message.innerText  = 'Too low! Try again.';
    } 
    else if (guess > randomNumber) 
    {
        message.innerText  = 'Too high! Try again.';
    }

    attempts++;
    attemptDisplayer.innerText = `Attempts: ${attempts}`;

    if (attempts==2) 
    {
        areYouClose();
    }

    if (attempts==3) 
    {
        disableGame();
        message.innerText = 'Sorry you lost :(. The answer was ' + randomNumber;
        message.style = "color: red;"
        help.innerText = "";
        remember.innerText = "";
    }
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.style = ""
    help.innerText = "I will try to help you if you struggle";
    message.innerText = 'Guess a number between 1 and 100';
    remember.innerHTML="<strong>Remember:</strong>You have only 3 attempts.";
    attemptDisplayer.innerText = 'Attempts: 0';
    guessInput.value = '';
    enableGame();
}

function disableGame() {
    document.getElementById('guess-button').disabled = true;
    document.getElementById('guess-input').disabled = true;
}

function enableGame() {
    document.getElementById('guess-button').disabled = false;
    document.getElementById('guess-input').disabled = false;
}

function areYouClose()
{
    const helpHint = randomNumber.toString().charAt(0);
    alert("It starts with " + helpHint);
}