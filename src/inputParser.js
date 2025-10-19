import MESSAGES from './messages.js';

const inputParser = (input) => {
  if (!input || input.trim() === '') return [];

  const parsedInput = input.match(/^\/\/(.+)\\n(.*)$/);

  let numbersArray = input;
  let delimiters = [',', ':'];

  if (parsedInput) {
    const [, customDelimiter, restNumbers] = parsedInput;

    if (!/^[^\d\s]$/.test(customDelimiter)) {
      throw new Error(MESSAGES.INVALID_DELIMITER_ERROR);
    }

    delimiters.push(customDelimiter);
    numbersArray = restNumbers;
  }

  const delimiterRegex = new RegExp(`[${delimiters.join('')}]`);
  const numbers = numbersArray.split(delimiterRegex).map(Number);

  return numbers;
};

export default inputParser;