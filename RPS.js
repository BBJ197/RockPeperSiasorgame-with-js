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
    let humanScore = 0
    let computerScore = 0
        if (computerChoice == "rock" && humanChoice == "rock" 
        || computerChoice == "peper" && humanChoice == "peper"
        || computerChoice == "siasor" && humanChoice == "siasor"){
            console.log ("Same answer retry again")
            return "d"
        }

        else if (computerChoice == "rock" && humanChoice == "peper" 
        || computerChoice == "peper" && humanChoice == "siasor" 
        || computerChoice == "siasor" && humanChoice == "rock"){
            console.log("You Won! This round " + humanChoice + " beats " + computerChoice)
            return "w"
        }

        else {
            console.log("You lose! This round. " + computerChoice + " beats " + humanChoice)
            return "l"
        }
}



console.log(getComputerChoice())
console.log(getHumanChoice())