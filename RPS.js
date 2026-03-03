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



console.log(getComputerChoice())
console.log(getHumanChoice())