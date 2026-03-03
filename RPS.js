function getComputerChoice(){
    let x = Math.random()
    if (x <= 0.3333){
        return("Rock")
    }
    else if (0.3333 < x && x <= 0.6777){
        return ("Peper")
    }
    else {
        return ("Siasor")
    }
    return x
}

console.log(getComputerChoice())