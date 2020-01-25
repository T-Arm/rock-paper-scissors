const showPlayerScore = document.getElementById("playerScore")
const showBotScore = document.getElementById("pcScore")
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const screen = document.getElementById("gameMoment")

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

let botScore = 0
let playerScore = 0
function upScore(winner){
    if(winner == "player"){
        playerScore++
        showPlayerScore.innerHTML = playerScore
    }else if(winner == "PC"){
        botScore++
        showBotScore.innerHTML = botScore
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
        upScore("PC")
        return("PC Wins")
    }else if(cIndex(pChoice) == cIndex(botChoice) + 1){
        upScore("player")
        return("You Win!!")
    }
    
}

function showGame(secs,pChoice){
    screen.style.fontSize = "100px"
    if(secs == 0){
        screen.style.fontSize = "70px"
        screen.innerHTML = play(pChoice, pcChoice())
    }else{
        screen.innerHTML = secs
        setTimeout(showGame, 750, secs-1, pChoice)
    }
}
rockBtn.addEventListener("click", function(){
    showGame(3, "rock")
})
paperBtn.addEventListener("click", function(){
    showGame(3, "paper")
})
scissorsBtn.addEventListener("click", function(){
    showGame(3, "scissors")
})