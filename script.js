const choices = ['rock', 'paper', 'scissors'];

function getPlayerChoice() {
    let choice = prompt("Choose! Rock, paper, or scissors?").toLowerCase();

    if (choices.includes(choice)) {
        return choice;
    } else {
        console.log('INVALID CHOICE! Try again.');
        return getPlayerChoice();
    }
}

function getComputerChoice() {
    randChoiceIndex = Math.floor(Math.random()*3);
    return choices[randChoiceIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('TIE! Play again!');
        return playRound(getPlayerChoice(), getComputerChoice());
    } else {
    
        let hasPlayerWon;

        switch (playerSelection) {
            case 'rock':
                hasPlayerWon = (computerSelection == 'scissors');
                break;
            case 'paper':
                hasPlayerWon = (computerSelection == 'rock');
                break;
            case 'scissors':
                hasPlayerWon = (computerSelection == 'paper');
                break;
            default:
                hasPlayerWon = false;
        }
        console.log(createStringForResult(hasPlayerWon, playerSelection, computerSelection));
        return hasPlayerWon;
    }

}

function createStringForResult(hasPlayerWon, playerSelection, computerSelection) {
    if (hasPlayerWon) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function game() {
    let computerWins = 0;
    let playerWins = 0;

    while (computerWins < 3 && playerWins < 3) {
        console.log(playerWins + " to " + computerWins);
        hasPlayerWon = playRound(getPlayerChoice(), getComputerChoice());
        if (hasPlayerWon) {
            playerWins++;
        } else {
            computerWins++;
        }
    }
    return 'FINISHED: ' + playerWins + ' to ' + computerWins;
}