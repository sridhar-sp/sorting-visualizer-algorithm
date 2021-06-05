const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const generateRandomNumbers = (max: number, limit: number) => {
  const randomArray = new Array(limit);
  for (let i = 0; i < limit; i++) {
    randomArray.push(Math.random() * max);
  }
  return randomArray;
};

export { sleep, generateRandomNumbers };
