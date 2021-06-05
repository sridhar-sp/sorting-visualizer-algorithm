import ArrayData from "../sort/types/ArrayData";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const generateRandomNumbers = (
  max: number,
  limit: number
): Array<ArrayData> => {
  const randomArray = new Array<ArrayData>(limit);
  for (let i = 0; i < limit; i++) {
    randomArray[i] = {
      data: Math.floor(Math.random() * max),
      key: i.toString(),
    };
  }
  return randomArray;
};

export { sleep, generateRandomNumbers };
