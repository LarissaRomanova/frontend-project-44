import { roundsNumber, getGreeting, getRandomNumber, getAnswer } from '../index.js';

export default () => {
  const mixNumber = 10; // обозначаем минимальный предел для выборки операнда
  const maxNumber = 25; // обозначаем максимальный предел для выборки операнда
  const operators = ['+', '-', '*']; // используемые операторы

  let expectedAnswer; // ожидаемый ответ

  // расчеты, исходя из выбранного оператора
  const answer = (number1, number2, operator) => {
    switch (operator) {
      case '+':
        return String(number1 + number2);
      case '-':
        return String(number1 - number2);
      case '*':
        return String(number1 * number2);
      default:
        return null;
    }
  };

  // задаем вопрос и определяем какой ответ ожидаем получить
  const getRound = () => {
    const randomNumber1 = getRandomNumber(mixNumber, maxNumber);
    const randomNumber2 = getRandomNumber(mixNumber, maxNumber);
    const randomOperatorIndex = getRandomNumber(0, operators.length);

    console.log('Question: ', randomNumber1, operators[randomOperatorIndex], randomNumber2);
    expectedAnswer = answer(randomNumber1, randomNumber2, operators[randomOperatorIndex]);
  };

  getGreeting();
  console.log('What is the result of the expression?');
  for (let i = 1; i <= roundsNumber; i += 1) {
    getRound();
    const isCorrectAnswer = getAnswer(expectedAnswer, i);
    if (!isCorrectAnswer) return;
  }
};
