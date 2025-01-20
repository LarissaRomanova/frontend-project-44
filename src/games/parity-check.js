import readlineSync from 'readline-sync';
import { roundsNumber, getGreeting, getRandomNumber, getAnswer } from '../index.js';

export default () => {
  const minNumber = 1;
  const maxNumber = 100; // обозначаем предел для выборки произвольного числа
  let expectedAnswer; // ожидаемый ответ

  // задаем вопрос и определяем какой ответ ожидаем получить
  const getRound = () => {
    const randomNumber = getRandomNumber(minNumber, maxNumber);
    console.log(`Question: ${randomNumber}`);
    if (randomNumber % 2 === 0) {
      expectedAnswer = 'yes';
    } else {
      expectedAnswer = 'no';
    }
  };

  // приветсвуем, знакомимся, описываем правила игры
  getGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= roundsNumber; i += 1) {
    getRound();
    const isCorrectAnswer = getAnswer(expectedAnswer, i);
    if (!isCorrectAnswer) return;
  }
};
