
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

function playRound(user){

    /*
    Compares the string between the user and computer 
    and declare a winner, loser, or a tie.
    */
   let computer = computerSelection();
   let output;

   switch(user.length>0){
    case computer == "rock" && user == "scissors":
    case computer == "scissors" && user == "paper":
    case computer == "paper" && user == "rock":
        alert( "You lost the round! " + user + " loses to " + computer);
        computerCount++;
        break;

    case user == "rock" && computer == "scissors":
    case user == "scissors" && computer == "paper":
    case user == "paper" && computer== "rock":
        alert("You won the round! " + user + " wins against " + computer);
        userCount++;
        break;
    default:
        alert("It's a tie!");
        break;
   }

   return output;
}

function updateScore(userCount, computerCount){
    


}


// Global variable to use keep track of scores between user and computer.
let userCount = 0;
let computerCount = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        playRound(button.id);
    })
});

if(userCount>computerCount){
    console.log("You won against the computer!");
}else{
    console.log("You lost against the computer");
}





