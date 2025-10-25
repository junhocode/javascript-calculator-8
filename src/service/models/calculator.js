import { calculatorValidator } from "../validators/calculatorValidator.js";

const calculator = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }

  calculatorValidator(numbers);

  return numbers.reduce((acc, curr) => acc + curr, 0);
};

export default calculator;
