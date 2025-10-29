import { ERROR_MESSAGES } from "../../constants/messages.js";

const CUSTOM_DELIMITER_VALIDATION_REGEX = /^[^\d\s]$/;

class Parser {
  #input;

  constructor(input) {
    this.#input = input;
  }

  static #validateDelimiter(customDelimiter) {
    if (!CUSTOM_DELIMITER_VALIDATION_REGEX.test(customDelimiter)) {
      throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);
    }
  }

  #matchDelimiter() {
  const defaultDelimiters = [",", ":"];
  let numbers = this.#input;

  const matches = this.#input.match(/^\/\/(?<delimiter>.)\\n(?<numbers>.*)/s);
    if (matches && matches.groups) {
      const { delimiter: customDelimiter, numbers: matchedNumbers } = matches.groups;
      Parser.#validateDelimiter(customDelimiter);
      return {
        delimiters: [...defaultDelimiters, customDelimiter],
        numbers: matchedNumbers,
      };
    }
    return { delimiters: defaultDelimiters, numbers };
  }

  #divideNumbers(delimiters, numbers) {
    const pattern = new RegExp(`[${delimiters.join('')}]`);
    return numbers.split(pattern).map(Number);
  }

  parse() {
    const { delimiters, numbers } = this.#matchDelimiter();
    return this.#divideNumbers(delimiters, numbers);
  }
}

export default Parser;
