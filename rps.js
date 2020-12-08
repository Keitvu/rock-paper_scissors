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

   let output;
   switch(true){
    case computer == "rock" && user == "scissors":
    case computer == "scissors" && user == "paper":
    case computer == "paper" && user == "rock":
        output = "You lose!" + user + " loses to " + computer;
        break;

    case user == "rock" && computer == "scissors":
    case user == "scissors" && computer == "paper":
    case user == "paper" && computer== "rock":
        output = "You Win!" + user + " wins against " + computer;
        break;
    default:
        output = "It's a tie!";
        break;
   }

   return output

}


for ( i=0; i<5; i++){    
    let userInput = (prompt("Choose between rock, paper, and scissors")).toLowerCase();
    let computerInput = computerSelection();
    console.log(playRound(computerInput, userInput));
}

