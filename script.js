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

function humanChoice(index) {
    let choice = ''
    switch (index) {
        case 0:
            choice = 'rock'
            break;
        case 1:
            choice = 'paper'
            break;
        case 2:
            choice = 'scissors'
            break;
        default:
            choice = undefined
            break;
    }
    return choice
}

let computerScore = 0
let humanScore = 0
let currentRound = 1

function playRound(humanChoice, computerChoice) {
    // This function let the user play until they or the computer 
    // get 5 points and show the winner of the game
    const round = document.querySelector('.current-round span')
    const humanOption = document.querySelector('.player-options .human span')
    const computerOption = document.querySelector('.player-options .computer span')
    const winner = document.querySelector('.winner span')
    const humanPoints = document.querySelector('.scores .human span')
    const computerPoints = document.querySelector('.scores .computer span')
    const finalResult = document.querySelector('.final-result')

    round.textContent = currentRound
    humanOption.textContent = humanChoice
    computerOption.textContent = computerChoice

    if (humanChoice === computerChoice) {
        winner.textContent = 'Tie!'
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'rock' && computerChoice === 'scissors') {
        winner.textContent = "You"
        ++humanScore
    }
    else {
        winner.textContent = 'Computer'
        ++computerScore
    }

    humanPoints.textContent = humanScore
    computerPoints.textContent = computerScore

    if (computerScore === 5 || humanScore === 5) {
        const result = document.createElement('h1')

        if (computerScore === 5)
            result.innerHTML = `The winner is: <span>Computer</span>`
        else
            result.innerHTML = `The winner is: <span>You</span>`

        finalResult.appendChild(result)

        computerScore = 0
        humanScore = 0
        currentRound = 1
    }
    else {
        currentRound++
        finalResult.innerHTML = ''
    }
}

const options = document.querySelectorAll('.option')
options.forEach((opt, index) => {
    opt.addEventListener('click', () => {
        const humanSelection = humanChoice(index)
        const computerSelection = computerChoice()

        if (humanSelection)
            playRound(humanSelection, computerSelection)
    })
})