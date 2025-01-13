import readlineSync from 'readline-sync';

const getGreeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getRandomNumber = () => {
    const max = 100; 
    return Math.floor(Math.random() * max);
};

const getAnswer = () => {
    const answer = readlineSync.question('Your answer: ');
    if ((randomNumber % 2 === 0 && answer === 'yes') || (randomNumber % 2 !== 0 && answer === 'no')) {
      console.log(`Correct!`);
    };
    console.log(`wrong answer`);
};



export default () => {
  console.log('Welcome to the Brain Games!');
  getGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let randomNumber = getRandomNumber();
  console.log('Question: ' + randomNumber);
  getAnswer();


};