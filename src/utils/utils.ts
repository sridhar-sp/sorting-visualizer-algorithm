import ArrayData from "../sort/types/ArrayData";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const generateRandomNumbers = (
  max: number,
  limit: number
): Array<ArrayData> => {
  if (max <= 0 || limit <= 0 || isNaN(max) || isNaN(limit)) return [];

  const randomArray = new Array<ArrayData>(limit);
  for (let i = 0; i < limit; i++) {
    randomArray[i] = {
      data: Math.floor(Math.random() * max),
      key: i.toString(),
    };
  }
  return randomArray;
};

const safeParseInt = (num: string, defaultValue: number = 0) => {
  try {
    return parseInt(num);
  } catch (e: any) {
    return defaultValue;
  }
};

export { sleep, generateRandomNumbers, safeParseInt };
