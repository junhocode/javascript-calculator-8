import { parserValidator } from "../validators/parserValidator.js";

const parser = (input) => {
  if (!input || input.trim() === '') return [];

  const parsedInput = input.match(/^\/\/(.+)\\n(.*)$/);

  let numbersArray = input;
  let delimiters = [',', ':'];

  if (parsedInput) {
    const [, customDelimiter, restNumbers] = parsedInput;

    parserValidator(customDelimiter);

    delimiters.push(customDelimiter);
    numbersArray = restNumbers;
  }

  const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);
  const numbers = numbersArray.split(delimiterRegex).map(Number);

  return numbers;
};

export default parser;