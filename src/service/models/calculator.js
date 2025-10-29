import { ERROR_MESSAGES } from "../../constants/messages.js";

class Calculator {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
  }

  static #validateNumbers(numbers) {
    if (!Array.isArray(numbers)) throw new Error(ERROR_MESSAGES.INVALID_INPUT);

    if (numbers.some(num => typeof num !== 'number' || isNaN(num))) throw new Error(ERROR_MESSAGES.IS_NAN);
  }
  
  static create(numbers) {
    this.#validateNumbers(numbers);
    return new Calculator(numbers);
  }

  add() {
    const numbers = this.#numbers;

    if (numbers.some(num => num < 0)) throw new Error(ERROR_MESSAGES.IS_NEGATIVE);

    return this.#numbers.reduce((acc, curr) => acc + curr, 0);
  }
}

export default Calculator;