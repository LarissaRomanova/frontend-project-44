const getRandomNumber = (minNumber = 1, maxNumber = 30) => {
  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  return randomNumber;
};

export default getRandomNumber;
