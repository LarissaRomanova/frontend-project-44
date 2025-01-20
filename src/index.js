import readlineSync from 'readline-sync';

const roundsNumber = 3; // количество раундов
let userName;

// приветсвие, знакомство
const getGreeting = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

// поиск рандомного числа
const getRandomNumber = (minNumber, maxNumber) => {
  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  return randomNumber;
};
// логика реакции на ответы игрока
const getAnswer = (expectedAnswer, i) => {
  let isCorrectAnswer;
  const receivedAnswer = readlineSync.question('Your answer: '); // запрашиваем у игрока ответ
  if (receivedAnswer === expectedAnswer && i !== roundsNumber) {
    console.log('Correct!');
    isCorrectAnswer = true;
  }
  if (receivedAnswer === expectedAnswer && i === roundsNumber) {
    console.log(`Correct!\nCongratulations, ${userName}!`); // дано предельное количество верных ответов заканчиваем игру
    isCorrectAnswer = true;
  }
  if (receivedAnswer !== expectedAnswer) {
    console.log(`'${receivedAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
    isCorrectAnswer = false;
  }
  return isCorrectAnswer;
};
export {
  roundsNumber, getGreeting, getRandomNumber, getAnswer,
};
