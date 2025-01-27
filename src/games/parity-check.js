import getRandomNumber from '../random.js';
import playBrainGame from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCalculation = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getRound = () => {
  const randomNum = getRandomNumber();

  const question = `${randomNum}`;
  const expectedAnswer = getCalculation(randomNum);
  return [question, expectedAnswer];
};

const parityCheckGame = () => playBrainGame(gameQuestion, getRound);
export default parityCheckGame;
