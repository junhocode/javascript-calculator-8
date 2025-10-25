import InputView from "../view/input.js";
import OutputView from "../view/output.js";
import { ERROR_MESSAGES, UI_MESSAGES } from "../constants/messages.js";
import parser from "../service/models/parser.js";
import calculator from "../service/models/calculator.js";

export default class Controller {
  async run() {
    try {
      const userInput = await InputView.readLineMessage(UI_MESSAGES.START);

      const numbers = parser(userInput);

      const sum = calculator(numbers);

      await OutputView.printMessage(UI_MESSAGES.RESULT(sum));
    } catch (error) {
      await OutputView.printMessage(ERROR_MESSAGES.WRAPPED);
      throw error;
    }
  }
}