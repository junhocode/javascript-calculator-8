import MESSAGES from './messages.js';

const calculator = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;

  if (numbers.some((n) => Number.isNaN(n) || n < 0)) {
    throw new Error(MESSAGES.INVALID_INPUT);
  }

  return numbers.reduce((acc, curr) => acc + curr, 0);
};

export default calculator;
