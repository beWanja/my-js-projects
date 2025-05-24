let wins = 0;
let totalGames = 0;

function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        wins++;
        result = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}`;
    }

    totalGames++;

    document.getElementById("result").textContent = result;
    document.getElementById("counter").textContent = `Won ${wins} / ${totalGames}`;
}