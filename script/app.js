// get image elements
let playerImage = document.querySelector("#playerImage");
let computerImage = document.querySelector("#computerImage");

// get button elements
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => console.log(play("rock")));
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

    console.log(playerChoice + " " + computerChoice);

    if(playerChoice == computerChoice)
        return "draw";
    if((playerChoice == "rock" && computerChoice == "scissors") 
        || (playerChoice == "paper" && computerChoice == "rock") 
        || (playerChoice == "scissors" && computerChoice == "paper"))
        return "player";
    return "computer";
}

