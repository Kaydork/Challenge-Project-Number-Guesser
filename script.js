let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
return Math.floor(Math.random() * 10);
};

const compareGuesses = function (human, computer, target) {
  if (human >9 || human < 0) {
    alert('Enter a number between 0 and 9');
  }
  
  const humanChange = Math.abs(human - target);
  const computerChange = Math.abs(computer - target);

  if (humanChange === computerChange) {
    return true;
  } else if (humanChange < computerChange) {
    return true;
  }  else if (humanChange > computerChange) {
    return false;
  }
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
};

const advanceRound = () => {
  (currentRoundNumber += 1);
};

console.log(3);

