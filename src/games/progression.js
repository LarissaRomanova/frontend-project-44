import getRandomNumber from '../random.js';
import playBrainGame from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

const getProgression = (firstElement, step, maxLength, hiddenElementIndex) => {
  const progression = [];

  for (let i = 0; i < maxLength; i += 1) {
    const nextProgressionElement = firstElement + i * step;
    if (i === hiddenElementIndex) {
      progression.push('..');
    } else {
      progression.push(nextProgressionElement);
    }
  }
  return progression.join(' ');
};

const getRound = () => {
  const minProgLength = 5; // обозначаем длину прогрессии
  const maxProgLength = 10;

  const step = getRandomNumber();
  const firstElement = getRandomNumber();
  const progLength = getRandomNumber(minProgLength, maxProgLength);
  const hiddenElementIndex = getRandomNumber(0, progLength);

  const question = getProgression(firstElement, step, progLength, hiddenElementIndex);
  const expectedAnswer = String(firstElement + step * hiddenElementIndex);
  return [question, expectedAnswer];
};

const progressionGame = () => playBrainGame(gameQuestion, getRound);
export default progressionGame;
