import getRandomNumber from '../random.js';
import playBrainGame from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const randomNum = getRandomNumber();

  const question = `${randomNum}`;
  const expectedAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

const parityCheckGame = () => playBrainGame(gameQuestion, getRound);
export default parityCheckGame;
