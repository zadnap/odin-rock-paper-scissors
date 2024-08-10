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
        return "Invalid option"
    }
    return choice
}
