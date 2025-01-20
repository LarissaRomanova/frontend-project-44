import { roundsNumber, getGreeting, getRandomNumber, getAnswer } from '../index.js';

export default () => {
  const minNumber = 2; // обозначаем предел для выборки чисел
  const maxNumber = 20;

  let expectedAnswer; // ожидаемый ответ

  // расчеты НОД
  const answer = (number) => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) return ('no');
    }
    return ('yes');
  };

  // задаем вопрос и определяем какой ответ ожидаем получить
  const getRound = () => {
    const randomNumber = getRandomNumber(minNumber, maxNumber);

    console.log(`Question: ${randomNumber}`);
    expectedAnswer = answer(randomNumber);
  };

  getGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 1; i <= roundsNumber; i += 1) {
    getRound();
    const isCorrectAnswer = getAnswer(expectedAnswer, i);
    if (!isCorrectAnswer) {
      return;
    }
  }
};
