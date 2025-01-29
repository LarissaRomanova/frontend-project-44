import getRandomNumber from '../random.js';
import playBrainGame from '../index.js';

const gameQuestion = 'What number is missing in the progression?';

const getProgression = (firstElement, step, maxLength) => {
  const progression = [];
  for (let i = 0; i < maxLength; i += 1) {
    progression.push(firstElement + i * step);
  }
  return progression;
};

const getRound = () => {
  const minProgLength = 5; // обозначаем длину прогрессии
  const maxProgLength = 10;

  const firstElement = getRandomNumber();
  const step = getRandomNumber();
  const progLength = getRandomNumber(minProgLength, maxProgLength);
  const progression = getProgression(firstElement, step, progLength);
  const hiddenElementIndex = getRandomNumber(0, progLength);
  const expectedAnswer = String(progression[hiddenElementIndex]);
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');

  return [question, expectedAnswer];
};

const progressionGame = () => playBrainGame(gameQuestion, getRound);
export default progressionGame;
