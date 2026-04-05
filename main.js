var playerScoreVar = 3;
var compScoreVar = 3;

const choiceEnum = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3
}

console.log(choiceEnum.ROCK == 1);

function resetState() {
  playerScoreVar = 3;
  compScoreVar = 3;
  compScore.innerText = compScoreVar;
  playerScore.innerText = playerScoreVar; 
}

function handleGameEnd() {
  if (playerScoreVar <= 0) {
    display.src = "dead.jpg"   
    resetState();
  }
  if (compScoreVar <= 0) {
    display.src = "won.jpg"
    resetState();
  }

}

function handleResult(playerWon) {
  var src;
  if (playerWon) {
    src = "playerWin.png";
    compScoreVar--;
  }else{
    src = "compWin.png";
    playerScoreVar--;
  }
  display.src = src;
  setTimeout(() => {
    display.src = "idle.png"
  }, 2500);
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    display.src = "even.png"
    setTimeout(() => {
      display.src = "idle.png"
    }, 2500);
  }else{
     switch (playerChoice) {
        case choiceEnum.ROCK:
            console.log(computerChoice == choiceEnum.PAPER);
            console.log(computerChoice);
            if (computerChoice == choiceEnum.PAPER) {
              handleResult(false);
            }else{
              handleResult(true);
            }     
          break;
        case choiceEnum.PAPER:
          if (computerChoice == choiceEnum.SCISSORS) {
            handleResult(false);
          }else{
            handleResult(true);
          }
         break;
        case choiceEnum.SCISSORS:
          if (computerChoice == choiceEnum.ROCK) {
            handleResult(false);
          }else{
            handleResult(true);
          }
         break;     
     }
    compScore.innerText = compScoreVar;
    playerScore.innerText = playerScoreVar;
    handleGameEnd();
  }
}

rock.addEventListener("click", function () {
  compareChoices(choiceEnum.ROCK, Math.floor((Math.random()*10) % 3 + 1))
});
paper.addEventListener("click", function () {
  compareChoices(choiceEnum.PAPER, Math.floor((Math.random()*10) % 3 + 1))
});
scissors.addEventListener("click", function () {
  compareChoices(choiceEnum.SCISSORS, Math.floor((Math.random()*10) % 3 + 1))
});
