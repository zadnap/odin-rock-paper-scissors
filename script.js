function computerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    switch (randomNumber) {
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        default:
            return 'scissors'
    }
}

function humanChoice() {
    const choice = prompt("Rock, paper, or scissors ?").toLowerCase()
    if (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        alert('Invalid option')
        return
    }
    return choice
}

let computerScore = 0
let humanScore = 0

function playRound(humanChoice, computerChoice) {
    console.log(`You: ${humanChoice}, Computer: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log('Tie!');
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You wins!')
        ++humanScore
    }
    else {
        console.log('You lose!');
        ++computerScore
    }

    console.log('Your score:', humanScore);
    console.log("Computer's score:", computerScore);
    console.log('\n')
}

// Let the user play 5 rounds
for (i = 0; i < 5; i++) {
    const computerSelection = computerChoice()
    let humanSelection
    
    do {
        humanSelection = humanChoice()
    } while (!humanSelection);

    playRound(humanSelection, computerSelection)
}

function showResult(humanScore, computerScore) {
    if (humanScore === computerScore) {
        alert('Tie!')
    }
    else if (humanScore > computerScore) {
        alert("You win!")
    }
    else {
        alert("You lose!")
    }
}

showResult(humanScore, computerScore)