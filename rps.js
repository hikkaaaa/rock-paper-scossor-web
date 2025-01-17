const player = document.getElementById("player");
const computer = document.getElementById("computer");
const results = document.getElementById("results");
const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");
let random_num;
let playerScore = 0; 
let computerScore = 0; 

const options = document.querySelectorAll(".options");
options.forEach(option => {
    option.addEventListener("click", event => {
        random_num = Math.floor(Math.random() * 3) + 1;
        switch(event.target.textContent){
            case "✌":
                player.textContent = "Scissors";
                if(random_num === 1){
                    computer.textContent = "Paper"; 
                    results.textContent = "You've won! PLAYER +1 SCORE";
                    playerScore++; 
                }else if(random_num === 2){
                    computer.textContent = "Rock"; 
                    results.textContent = "You've lost. COMPUTER +1 SCORE";
                    computerScore++;
                }else{
                    computer.textContent = "Scissors";
                    results.textContent = "IT'S A TIE!";
                }
                break;
            case "✋": 
                player.textContent = "Paper";
                if(random_num === 1){
                    computer.textContent = "Rock"; 
                    results.textContent = "You've won! PLAYER +1 SCORE";
                    playerScore++;
                }else if(random_num === 2){
                    computer.textContent = "Scissors"; 
                    results.textContent = "You've lost. COMPUTER +1 SCORE";
                    computerScore++;
                }else{
                    computer.textContent = "Paper";
                    results.textContent = "IT'S A TIE!";
                }
                break;
            case "✊":
                player.textContent = "Rock";
                if(random_num === 1){
                    computer.textContent = "Scissors"; 
                    results.textContent = "You've won! PLAYER +1 SCORE";
                    playerScore++;
                }else if(random_num === 2){
                    computer.textContent = "Paper"; 
                    results.textContent = "You've lost. COMPUTER +1 SCORE";
                    computerScore++;
                }else{
                    computer.textContent = "Rock";
                    results.textContent = "IT'S A TIE!";
                }
                break;
        }

        pScore.textContent = `${playerScore} Points!`;
        cScore.textContent = `${computerScore} Points!`;
    });
});