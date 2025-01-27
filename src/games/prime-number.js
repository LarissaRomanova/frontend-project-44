import getRandomNumber from '../random.js';
import playBrainGame from '../index.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCalculation = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return ('no');
  }
  return ('yes');
};

const getRound = () => {
  const minNumber = 2;
  const maxNumber = 20;
  const randomNum = getRandomNumber(minNumber, maxNumber);

  const question = `${randomNum}`;
  const expectedAnswer = getCalculation(randomNum);
  return [question, expectedAnswer];
};

const primeNumberGame = () => playBrainGame(gameQuestion, getRound);
export default primeNumberGame;
