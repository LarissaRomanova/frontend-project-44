import getRandomNumber from '../random.js';
import playBrainGame from '../index.js';

const gameQuestion = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getCalculation = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return String(number1 + number2);
    case '-':
      return String(number1 - number2);
    case '*':
      return String(number1 * number2);
    default:
      return 'Error! Unknown operator!';
  }
};

const getRound = () => {
  const randomNum1 = getRandomNumber();
  const randomNum2 = getRandomNumber();
  const randomOperatorIndex = getRandomNumber(0, operators.length);

  const question = `${randomNum1} ${operators[randomOperatorIndex]} ${randomNum2}`;
  const expectedAnswer = getCalculation(randomNum1, randomNum2, operators[randomOperatorIndex]);
  return [question, expectedAnswer];
};

const calculatorGame = () => playBrainGame(gameQuestion, getRound);
export default calculatorGame;
