
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

function updateScore(userCount, computerCount, outputRound){

    /*
     * Updates the Score of the player after each round.  
     */
    const score = document.querySelector('#count');
    score.firstElementChild.textContent = 'Player: ' + userCount;
    score.lastElementChild.textContent = 'Computer: ' + computerCount;

    const buttonContainer = document.querySelector('#all_buttons');
    const results = document.createElement('h2');
    results.classList.add('results');
    results.textContent = outputRound;
    buttonContainer.appendChild(results);    
}


// Global variable to use keep track of scores between user and computer.
let userCount = 0;
let computerCount = 0;

/*
 *Initialize all the buttons and connects it to the function to play a round and update scores.
 */
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        let outputRound = playRound(button.id);
        updateScore(userCount, computerCount, outputRound);
        
    })
});








