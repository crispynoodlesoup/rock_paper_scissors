// get game elements
let computerImage = document.querySelector("#computerImage");
let winner = document.querySelector("#winner");

// get button elements
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));

function play(playerChoice) {
    // calculate computer choice
    let computerChoice = "";
    if(Math.random() < 0.35)
        computerChoice = "rock";
    else if(Math.random() < 0.65)
        computerChoice = "paper";
    else
        computerChoice = "scissors";

    if(playerChoice == computerChoice)
        updateVisuals(playerChoice, computerChoice, "no one");
    else if((playerChoice == "rock" && computerChoice == "scissors") 
        || (playerChoice == "paper" && computerChoice == "rock") 
        || (playerChoice == "scissors" && computerChoice == "paper"))
        updateVisuals(playerChoice, computerChoice, "player");
    else updateVisuals(playerChoice, computerChoice, "computer");
}

function updateVisuals(p, c, w) {
    winner.textContent = w + "!";
    console.log("test");
    if(p == "rock")
        document.getElementById("playerImage").src = "./resources/rock.png";
    if(p == "paper")
        document.getElementById("playerImage").src = "./resources/paper.png";
    if(p == "scissors")
        document.getElementById("playerImage").src = "./resources/scissors.png";
    if(c == "rock")
        document.getElementById("computerImage").src = "./resources/rock.png";
    if(c == "paper")
        document.getElementById("computerImage").src = "./resources/paper.png";
    if(c == "scissors")
        document.getElementById("computerImage").src = "./resources/scissors.png";
}