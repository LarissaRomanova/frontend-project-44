import getRandomNumber from '../random.js';
import playBrainGame from '../index.js';

const gameQuestion = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const getCalculation = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return (number1 + number2);
    case '-':
      return (number1 - number2);
    case '*':
      return (number1 * number2);
    default:
      return `Error! ${operator} is unknown operator!`;
  }
};

const getRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operatorIndex = getRandomNumber(0, operators.length);

  const question = `${number1} ${operators[operatorIndex]} ${number2}`;
  const expectedAnswer = String(getCalculation(number1, number2, operators[operatorIndex]));
  return [question, expectedAnswer];
};

const calculatorGame = () => playBrainGame(gameQuestion, getRound);
export default calculatorGame;
