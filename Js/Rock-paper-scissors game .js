const score={
    wins:0,
    losses:0,
    ties:0
};
updateScore();

function playGame(playerMove){
    const computerMove=pickComputerMove();
    let result='';
        if (playerMove === 'rock'){
                if (computerMove === 'rock'){
                    result ='tie.';
                }else if (computerMove === 'paper'){
                    result ='you loose.';
                }else if(computerMove === 'scissors'){
                    result = 'You won.';
                }
        }else if(playerMove === 'paper'){

                if (computerMove === 'rock'){
                    result ='You won.';
                }else if (computerMove === 'paper'){
                    result ='tie.';
                }else if(computerMove === 'scissors'){
                    result = 'you loose.';
                }

        }else if( playerMove === 'scissors'){
            
                if (computerMove === 'rock'){
                    result ='You loose.';
                }else if (computerMove === 'paper'){
                    result ='you won.';
                }else if(computerMove === 'scissors'){
                    result = 'tie.';
                }

        }
        if(result === 'You won.'){
            score.wins +=1;
        }else if( result == 'you loose.'){
            score.losses +=1;
        }
        else if(result === 'tie.'){
            score.ties +=1;
        }
        localStorage.setItem('score', JSON.stringify(score));// Varibales are temperary the only exists on the 
        // current page. if we refresh all variables will be deleted so we can use localStorage Built-in Objects
        updateScore();

        document.querySelector('.js-result').innerHTML=`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;

        document.querySelector('.js-moves').innerHTML=`You picked -->
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        
        <img src="images/${computerMove}-emoji.png" class="move-icon" >
        <--Computer picked`;

//         alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// wins: ${score.wins}, Losses: ${score.losses}, Ties:${score.ties}`);
        

}
function updateScore(){
            document.querySelector('.js-score').innerHTML=
            `wins: ${score.wins}, Losses: ${score.losses}, Ties:${score.ties}`;

}
function pickComputerMove(){
            const randomNumber=Math.random();

            let computerMove='';
            if (randomNumber>=0 && randomNumber<=1/3) {
                computerMove='rock';
            }
            else if(randomNumber >=1/3 && randomNumber <2/3 ){
                computerMove='paper';
            }else if(randomNumber >=2/3 && randomNumber<1 ){
                computerMove='scissors';
            }
            return computerMove;
}
// Load stored data from localStorage
const storedScore = localStorage.getItem('score');
if (storedScore) {
    const parsedScore = JSON.parse(storedScore);
    if (parsedScore && typeof parsedScore === 'object') {
        // Update the score object with the stored values
        Object.assign(score, parsedScore);
    }
}
function resetScore() {
    // Reset the score object
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    // Update the local storage with the reset score
    localStorage.setItem('score', JSON.stringify(score));

    // Update the displayed score
    updateScore();
}

