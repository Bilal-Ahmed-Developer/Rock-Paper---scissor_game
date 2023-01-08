const usrChoice = document.getElementById("User-choice");
const comChoice = document.getElementById("Computer-choice");
const resultDisplay = document.getElementById("result");
let possible_choices = document.querySelectorAll('button')
let choice;
let computerChoice
let result

possible_choices.forEach(possible_choice => possible_choice.addEventListener("click", (e) => {
      choice = e.target.id
      usrChoice.innerHTML = choice;
      generaterandom()
      getresult()
}));

function generaterandom() {
      let random = Math.floor(Math.random() * 3) + 1;
      if (random === 1) {
            computerChoice = "rock"
      }
      if (random === 2) {
            computerChoice = "scissor"
      }
      if (random === 3) {
            computerChoice = "paper"
      }
      comChoice.innerHTML = computerChoice
}

function getresult() {
      if (computerChoice === choice) {
            result = "It's a draw"
      }
      else if (computerChoice === "rock" && choice === "paper") {
            result = "you win"
      }
      else if (computerChoice === "rock" && choice === "scissor") {
            result = "you lost"
      }
      else if(computerChoice ==="paper" && choice ==="rock"){
            result = "you win"
      } 
      else if(computerChoice ==="paper" && choice ==="scissor"){
            result = "you lost"
      } 
      else if(computerChoice ==="scissor" && choice ==="paper"){
            result = "you win"
      } 
      else if(computerChoice ==="scissor" && choice ==="rock"){
            result = "you lost"
      }
      resultDisplay.innerHTML = result 
}
