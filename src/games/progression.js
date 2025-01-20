import {
  roundsNumber, getGreeting, getRandomNumber, getAnswer,
} from '../index.js';

export default () => {
  const minProgressionLength = 5; // обозначаем длину прогрессии
  const maxProgressionLength = 10;
  const minProgressionStep = 1;
  const maxProgressionStep = 10;
  const minFirstElement = 1;
  const maxFirstElement = 10;
  let expectedAnswer; // ожидаемый ответ

  // задаем вопрос и определяем какой ответ ожидаем получить
  const getRound = () => {
    const hiddenElementIndex = getRandomNumber(minProgressionLength, maxProgressionLength);
    const progressionStep = getRandomNumber(minProgressionStep, maxProgressionStep);
    const firstProgressionElement = getRandomNumber(minFirstElement, maxFirstElement);
    const progression = [];
    let hiddenElement;

    for (let i = 0; i < maxProgressionLength; i += 1) {
      const nextProgressionElement = firstProgressionElement + i * progressionStep;
      if (i === hiddenElementIndex) {
        hiddenElement = nextProgressionElement;
        progression.push('..');
      } else {
        progression.push(nextProgressionElement);
      }
    }
    console.log(`Question: ${progression.join(' ')}`);
    expectedAnswer = String(hiddenElement);
    return expectedAnswer;
  };

  getGreeting();
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= roundsNumber; i += 1) {
    getRound();
    const isCorrectAnswer = getAnswer(expectedAnswer, i);
    if (isCorrectAnswer === false) {
      return;
    }
  }
};
