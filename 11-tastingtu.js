// day-11
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
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

const rps = (player1, player2) => {
    if (player1 === player2) return "Draw!";
    if (player1 === "scissors" && player2 ===  "paper") {
        return "Player 1 won!"
    } else if (player1 ===  "paper" && player2 ===  "rock"){
        return "Player 1 won!"
    } else if (player1 ===  "rock" && player2 ===  "scissors"){
        return "Player 1 won!"
    } else {
        return "Player 2 won!"
    }
}

const rps = (player1, player2) => {
    if (player1 === player2) return "Draw!";
    if ((player1 === "scissors" && player2 ===  "paper") || (player1 ===  "paper" && player2 ===  "rock") || (player1 ===  "rock" && player2 ===  "scissors")){
        return "Player 1 won!"
    }else {
        return "Player 2 won!"
    }
};
const rps = (player1, player2) => {
    if (player1 === player2) return "Draw!";
    return (player1 === "scissors" && player2 ===  "paper") || (player1 ===  "paper" && player2 ===  "rock") || (player1 ===  "rock" && player2 ===  "scissors") ? "Player 1 won!": "Player 2 won!"
}


const rps = (player1, player2) => {
    return (player1 === player2) ?"Draw!":(player1 === "scissors" && player2 ===  "paper") || (player1 ===  "paper" && player2 ===  "rock") || (player1 ===  "rock" && player2 ===  "scissors") ? "Player 1 won!": "Player 2 won!"
}

const rps = (player1, player2) =>(player1 === player2) ?"Draw!":(player1 === "scissors" && player2 ===  "paper") || (player1 ===  "paper" && player2 ===  "rock") || (player1 ===  "rock" && player2 ===  "scissors") ? "Player 1 won!": "Player 2 won!"

const rps = (player1, player2) => {
    const rules ={
        rock:'scissors',
        scissors:'paper',
        paper:'rock',
    };

    if (player1 === player2){
        return "Draw!"
    } else {
        return `Player ${rules[player1] === player2 ? "1" : "2"} won!`
    }
}

const rps = (player1, player2) => {
    const rules ={
        rock:'scissors',
        scissors:'paper',
        paper:'rock',
    };

    return player1 === player2 ? "Draw!" : `Player ${rules[player1] === player2 ? "1" : "2"} won!`
}

console.log(rps("scissors", "paper"))
console.log(rps("scissors", "rock"))
console.log(rps("paper", "paper"))
