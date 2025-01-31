import readlineSync from 'readline-sync';

const playBrainGame = (gameQuestion, getRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameQuestion);

  const AMOUNT_ROUNDS = 3;
  for (let i = 1; i <= AMOUNT_ROUNDS; i += 1) {
    const [question, expectedAnswer] = getRound();
    console.log(`Question: ${question}`);
    const receivedAnswer = readlineSync.question('Your answer: ');
    if (receivedAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${receivedAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playBrainGame;
