import getRandomNumber from '../random.js';
import playBrainGame from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  if (number2 !== 0) {
    const gcd = number1 % number2;
    return getGCD(number2, gcd);
  }
  return number1;
};

const getRound = () => {
  const randomNum1 = getRandomNumber();
  const randomNum2 = getRandomNumber();

  const question = `${randomNum1} ${randomNum2}`;
  const expectedAnswer = String(getGCD(randomNum1, randomNum2));
  return [question, expectedAnswer];
};

const gcdGame = () => playBrainGame(gameQuestion, getRound);
export default gcdGame;
