let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#btn");
const choices = document.querySelectorAll(".images_");

const genComp = () => {
    const options = ["rock", "paper", "scissor"]; // Corrected options
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
}

const showWinner = (result) => {
    if (result === 'draw') {
        console.log("It's a draw");
        msg.innerText = "It's a draw";
    } else if (result === 'win') {
        console.log("You win");
        msg.innerText = "You won";
        userScore++;
    } else {
        console.log("You lose");
        msg.innerText = "You lose";
        compScore++;
    }
    document.querySelector('.score_one p').innerText = userScore;
    document.querySelector('.score_two p').innerText = compScore;
}

const play_game = (user_choice) => {
    console.log("The user choice is ", user_choice);

    const compChoice = genComp();
    console.log("The computer choice is ", compChoice);

    if (user_choice === compChoice) {
        // Draw condition
        showWinner('draw');
    } else {
        let userWin;
        if (user_choice === 'rock') {
            userWin = compChoice === "scissor" ? 'win' : 'lose';
        } else if (user_choice === "paper") {
            userWin = compChoice === "rock" ? 'win' : 'lose';
        } else if (user_choice === "scissor") {
            userWin = compChoice === "paper" ? 'win' : 'lose';
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        play_game(user_choice);
    });
});
