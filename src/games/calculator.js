import { roundsNumber, getGreeting, getRandomNumber, getAnswer } from '../index.js';

export default () => {
  const maxNumber1 = 25; // обозначаем предел для выборки первого операнда
  const maxNumber2 = 10; // обозначаем предел для выборки второго операнда
  const operators = ['+' , '-' , '*' ]; // используемые операторы
  
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
    let randomNumber1 = getRandomNumber(maxNumber1);
    let randomNumber2 = getRandomNumber(maxNumber2);
    let randomOperatorIndex = getRandomNumber(operators.length);
    
    console.log('Question: ' + randomNumber1 + operators[randomOperatorIndex] + randomNumber2);
    expectedAnswer = answer(randomNumber1, randomNumber2, operators[randomOperatorIndex]);
  };

  getGreeting();
  console.log('What is the result of the expression?');
  for (let i = 1; i <= roundsNumber; i = i + 1) {
    getRound();
    const isCorrectAnswer = getAnswer(expectedAnswer, i);
    if (!isCorrectAnswer) return;
  };
};
