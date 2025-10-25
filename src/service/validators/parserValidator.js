import { ERROR_MESSAGES } from "../../constants/messages";

const CUSTOM_DELIMITER_VALIDATION_REGEX = /^[^\d\s]$/;

export const parserValidator = (delimiter) => {
  if (!CUSTOM_DELIMITER_VALIDATION_REGEX.test(delimiter)) {
    throw new Error(ERROR_MESSAGES.INVALID_DELIMITER);
  }
};