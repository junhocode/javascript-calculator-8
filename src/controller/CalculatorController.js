import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import Parser from "../service/models/Parser.js";
import Calculator from "../service/models/Calculator.js";

class CalculatorController {
  async run() {
    try {
      const userInput = await InputView.getUserInput();
      console.log(userInput);
      const numbers = new Parser(userInput).parse();
      console.log(numbers);
      const sum = Calculator.create(numbers).add();

      OutputView.printSum(sum);
    } catch (error) {
      throw error;
    }
  }
}

export default CalculatorController;