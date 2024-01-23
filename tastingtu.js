//Batu gunting kertas
const rps = (player1, player2) => {
    switch(true){
        case player1 === player2:
            return "Draw!";
        case (player1 ==="rock" && player2 === "scissors") || 
        (player1 ==="scissors" && player2 === "paper") || 
        (player1 ==="paper" && player2 === "rock"):
            return "Player 1 won!"
        default:
            return "Player 2 won!"
    }
}

console.log(rps("scissors", "paper"))
console.log(rps("scissors", "rock"))
console.log(rps("paper", "paper"))
