let humanScore = 0
let computerScore = 0
let restart = document.getElementById("#restart");

function getComputerChoice(){
    let x = Math.random()
    let botInput = document.getElementById("botInput")
    if (x <= 0.3333){
        botInput.innerHTML = "&#128511;"
        return("rock");
    }
    else if (0.3333 < x && x <= 0.6777){
        botInput.innerHTML = "&#128195;"
        return ("peper");
    }
    else {
        botInput.innerHTML = "&#x2702;"
        return ("siasor");
    }
}

function getHumanChoice(){

    return new Promise((resolve) => {
        let userInput = document.getElementById("userInput") 
        const rockBtn = document.getElementById("Rock");
        const paperBtn = document.getElementById("Peper");
        const scissorsBtn = document.getElementById("Seasor");

        rockBtn.onclick = () => {
            userInput.innerHTML = "&#128511;";
            resolve("rock");
        };
        paperBtn.onclick = () => {
            userInput.innerHTML = "&#128195;";
            resolve("peper");
        };
        scissorsBtn.onclick = () => {
            userInput.innerHTML = "&#x2702;";
            resolve("siasor");
        };
    });
}

function playRound(humanChoice, computerChoice) {

        if (computerChoice == "rock" && humanChoice == "rock" 
        || computerChoice == "peper" && humanChoice == "peper"
        || computerChoice == "siasor" && humanChoice == "siasor"){
            return ("d");
        }

        else if (computerChoice == "rock" && humanChoice == "peper" 
        || computerChoice == "peper" && humanChoice == "siasor" 
        || computerChoice == "siasor" && humanChoice == "rock"){
            return ("w");
        }

        else {
            return ("l");
        }
}

async function playGame(){
    let userScore = document.getElementById("userScore");
    let botScore = document.getElementById("botScore");
    let missage = document.getElementById("missage");
        
        let humanChoice = await getHumanChoice()
        let computerChoice = getComputerChoice()
        let returnValue = playRound(humanChoice, computerChoice)
        if (returnValue === ("w")){
            missage.style = "display : block; color: rgb(2, 39, 3);"
            missage.innerHTML = "You Won! This round " + humanChoice + " beats " + computerChoice + "&#127881;"
            humanScore ++
            userScore.textContent = humanScore
        }
        else if (returnValue === ("l")){
            missage.style = "display : block; color: rgb(76, 17, 4);"
            missage.innerHTML = "You lose! This round. " + computerChoice + " beats " + humanChoice + "&#128532;"
            computerScore ++
            botScore.textContent = computerScore
        }
        else {
             missage.innerText = "Same answer retry again"
        }
    
        if (humanScore < 5 && computerScore < 5){
            playGame()
        }
         else {
            if (humanScore == 5){
                missage.style = "display : block; color: rgb(2, 39, 3); "
                missage.innerHTML = "You Won! &#127881;"
                restart.style = "display : block;"
                
            }
            else if (computerScore == 5){
                missage.style = "display : block; color: rgb(76, 17, 4);"
                missage.innerHTML = "You lose! &#128532;"
                restart.style = "display : block;"
            }
        }
    }

    playGame()