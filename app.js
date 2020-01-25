const playerScore = document.getElementById("playerScore")
const pcSCore = document.getElementById("pcScore")
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")

let compare = ["", "rock", "paper", "scissors"]

function pcChoice(){
    return(compare[Math.floor(Math.random()*3)+1])
}

function cIndex(choice){
    for(i = 0; i < compare.length; i++){
    if(choice == compare[i]){
        return i
    }
}
}
function play(pChoice, botChoice){
    console.log(pChoice + "   " + botChoice)
    if(pChoice == botChoice){
        return("Tie")
    }
    if(Math.abs(cIndex(botChoice) - cIndex(pChoice)) == 2){
        if(pChoice == "scissors"){
            pChoice = ""
        }else{
            botChoice = ""
        }
        console.log(cIndex(pChoice) + "   " + cIndex(botChoice))
    }
    if(cIndex(pChoice) == cIndex(botChoice) - 1){
        return("PC Wins")
    }else if(cIndex(pChoice) == cIndex(botChoice) + 1){
        return("You Win!!")
    }
    
}

rockBtn.addEventListener("click", function(){
    console.log(play("rock", pcChoice()))
})
paperBtn.addEventListener("click", function(){
    console.log(play("paper",pcChoice()))
})
scissorsBtn.addEventListener("click", function(){
    console.log(play("scissors", pcChoice()))
})