import getRandomNumber from '../random.js';
import playBrainGame from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const getCalculation = (number1, number2) => {
  if (number2 !== 0) {
    const gcd = number1 % number2;
    return getCalculation(number2, gcd);
  }
  return String(number1);
};

const getRound = () => {
  const randomNum1 = getRandomNumber();
  const randomNum2 = getRandomNumber();

  const question = `${randomNum1} ${randomNum2}`;
  const expectedAnswer = getCalculation(randomNum1, randomNum2);
  return [question, expectedAnswer];
};

const gcdGame = () => playBrainGame(gameQuestion, getRound);
export default gcdGame;
