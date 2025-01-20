import { roundsNumber, getGreeting, getRandomNumber, getAnswer } from '../index.js';

export default () => {
  const maxNumber1 = 100; // обозначаем предел для выборки первого числа
  const maxNumber2 = 100; // обозначаем предел для выборки второго числа

  let expectedAnswer; // ожидаемый ответ

  // расчеты НОД
  const answer = (number1, number2) => {
    if (number2 !== 0) {
      const gcd = number1 % number2;
      return answer(number2, gcd);
    }
    return String(number1);
  };

  // задаем вопрос и определяем какой ответ ожидаем получить
  const getRound = () => {
    const randomNumber1 = getRandomNumber(maxNumber1);
    const randomNumber2 = getRandomNumber(maxNumber2);

    console.log('Question: ' + randomNumber1 + ' ' + randomNumber2);
    expectedAnswer = answer(randomNumber1, randomNumber2);
  };

  getGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= roundsNumber; i += 1) {
    getRound();
    const isCorrectAnswer = getAnswer(expectedAnswer, i);
    if (!isCorrectAnswer) {
      return;
    };
  }
};
