import { ERROR_MESSAGES } from "../../constants/messages";

export const calculatorValidator = (numbers) => {
  if (numbers.some((n) => Number.isNaN(n) || n < 0)) {
    throw new Error(ERROR_MESSAGES.INVALID_INPUT);
  }
};