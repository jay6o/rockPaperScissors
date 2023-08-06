function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"]
  const randomSelect = Math.floor(Math.random() * choices.length)
  return (choices[randomSelect])
}

let computerSelection = getComputerChoice()

playerSelection = prompt.value

function game(playerSelection, computerSelection){
  let playerScore = 0
  let cpuScore = 0
  for (let i = 0; i < 5; i++){
    prompt("Choose your weapon")
    if(playerSelection == "rock" && computerSelection == "scissors"){
    console.log("You win!")
    playerScore += 1

   }else if(playerSelection == "paper" && computerSelection == "rock"){
      console.log ("You win!")
      playerScore += 1
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
      console.log ("You win!") 
      playerScore += 1
    }else{
      console.log ("You lose..")
      cpuScore += 1
    }
  console.log(game(playerSelection, computerSelection))
  console.log(playerScore + ":" + cpuScore)
  }
}