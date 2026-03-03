function getComputerChoice(){
    let x = Math.random()
    if (x <= 0.3333){
        return("rock")
    }
    else if (0.3333 < x && x <= 0.6777){
        return ("peper")
    }
    else {
        return ("siasor")
    }
}

function getHumanChoice(){
    let responce = prompt("CHOOSE one Rock, Peper Siasor")
    return responce.toLowerCase()
}

function playRound(humanChoice, computerChoice) {
        if (computerChoice == "rock" && humanChoice == "rock" 
        || computerChoice == "peper" && humanChoice == "peper"
        || computerChoice == "siasor" && humanChoice == "siasor"){
            return "d"
        }

        else if (computerChoice == "rock" && humanChoice == "peper" 
        || computerChoice == "peper" && humanChoice == "siasor" 
        || computerChoice == "siasor" && humanChoice == "rock"){
            return "w"
        }

        else {
            return "l"
        }
}

function playGame(){
    let humanScore = 0
    let computerScore = 0
    for (let i = 1; i < 6; i++ ){

        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        let returnValue = playRound(humanChoice, computerChoice)

        if (returnValue === ("w")){
            console.log("You Won! This round " + humanChoice + " beats " + computerChoice)
            humanScore ++
        }
        else if (returnValue === ("l")){
            console.log("You lose! This round. " + computerChoice + " beats " + humanChoice)
            computerScore ++
        }
        else {
            console.log ("Same answer retry again")
            i--
        }
    }

    if (humanScore > computerScore) {
        console.log("Congra! U have won by score " + humanScore + " by " + computerScore)
    }

    else {
        console.log("Sorry! U have lost by score " + humanScore + " by " + computerScore)
    }
}

playGame()