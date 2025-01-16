import readlineSync from 'readline-sync';

export default () => {
  const maxNumber = 100; // обозначаем предел для выборки произвольного числа
  const roundsNumber = 3; // обозначаем количество раундов
  let userName = '';
  let expectedAnswer; // ожидаемый ответ
  let receivedAnswer; // полученный ответ
  // поиск рандомного числа
  const getRandomNumber = () => {
    return Math.floor(Math.random() * maxNumber);
  };
  // задаем вопрос и определяем какой ответ ожидаем получить
  const getRound = () => {
    const randomNumber = getRandomNumber();
    console.log('Question: ' + randomNumber);
    if (randomNumber % 2 === 0) {
      expectedAnswer = 'yes';
    } else {
      expectedAnswer = 'no';
    }
  };

  // приветсвуем, знакомимся, описываем правила игры
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // начинаем игру
  for (let i = 1; i <= roundsNumber; i += 1) {
    getRound();
    receivedAnswer = readlineSync.question('Your answer: ');
    if (receivedAnswer === expectedAnswer) {
      console.log('Correct!');
      if (i === roundsNumber) {
        console.log(`Congratulations, ${userName}!`); // дано предельное количество верных ответов заканчиваем игру
      }
    } else {
      console.log(`'${receivedAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      i = roundsNumber; // ответ неверный - заканчиваем игру
    }
  }
};
