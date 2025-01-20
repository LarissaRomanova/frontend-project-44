import {
  roundsNumber, getGreeting, getRandomNumber, getAnswer,
} from '../index.js';

export default () => {
  const minNumber = 1; // обозначаем предел для выборки чисел
  const maxNumber = 100;

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
    const randomNumber1 = getRandomNumber(minNumber, maxNumber);
    const randomNumber2 = getRandomNumber(minNumber, maxNumber);

    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    expectedAnswer = answer(randomNumber1, randomNumber2);
  };

  getGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= roundsNumber; i += 1) {
    getRound();
    const isCorrectAnswer = getAnswer(expectedAnswer, i);
    if (!isCorrectAnswer) {
      return;
    }
  }
};
