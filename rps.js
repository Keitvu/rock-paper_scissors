
function computerSelection(){

    /*
    The code below picks number between 1 to 3 
    and then picks the element depending on the number it lands on.
    */

    let random = ((Math.random() * 3)+1);
    let element;

    switch(true){

        case (random >=1 && random <2):
            element = "rock";
            break;
        case (random >=2 && random<3):
            element = "paper";
            break;
        default:
            element = "scissors";
            break;
    }

    return element;

}

function playRound(computer, user){

    /*
    Compares the string between the user and computer 
    and declare a winner, loser, or a tie.
    */

   let output;
   switch(true){
    case computer == "rock" && user == "scissors":
    case computer == "scissors" && user == "paper":
    case computer == "paper" && user == "rock":
        output = "You lost the round! " + user + " loses to " + computer;
        computerCount++;
        break;

    case user == "rock" && computer == "scissors":
    case user == "scissors" && computer == "paper":
    case user == "paper" && computer== "rock":
        output = "You won the round! " + user + " wins against " + computer;
        userCount++;
        break;
    default:
        output = "It's a tie!";
        break;
   }

   return output;
}

function game(){

    // Plays 5 round of RPS. Each round is a prompted for the user to enter their answer
    // and then compares the value and report a winner for the round. Afterwards annouces winner of the game
    
    for ( i = 0 ; i < 5 ; i++){    
        let userInput = (prompt("Choose between rock, paper, and scissors")).toLowerCase();
        let compInput = computerSelection();
        console.log(playRound(compInput, userInput));
        console.log("Player: " + userCount);
        console.log("Computer: " + computerCount);
    }

    if(userCount>computerCount){
        console.log("You won against the computer!");
    }else {
        console.log("You lost against the computer");
    }

}

// Global variable to use keep track of scores between user and computer.
let userCount = 0;
let computerCount = 0;
game();



