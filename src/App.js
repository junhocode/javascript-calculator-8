import CalculatorController from "./controller/CalculatorController.js";

class App {
  async run() {
    const calculatorController = new CalculatorController();
    await calculatorController.run();
  }
}

export default App;