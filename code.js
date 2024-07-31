let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let message = document.getElementById('message');
let help = document.getElementById('help_p');
let remember = document.getElementById("remember");

document.getElementById('guess-button').addEventListener('click', checkGuess);
document.getElementById('restart-button').addEventListener('click', restartGame);

function checkGuess() {

    if (attempts == 3) 
    {
        return;
    }

    const guessInput = document.getElementById('guess-input');
    const guess = Number(guessInput.value);
    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

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

    if (attempts>3) 
    {
        alert("Sorry you need to restart the game again");
    }

}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.style = ""
    help.innerText = "I will try to help you if you struggle";
    message.innerText = 'Guess a number between 1 and 100';
    remember.innerHTML="<strong>Remember:</strong>You have only 3 attempts.";
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('guess-input').value = '';
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