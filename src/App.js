import { Console } from '@woowacourse/mission-utils';
import MESSAGES from './messages.js';
import calculator from './calculator.js';
import inputParser from './inputParser.js';

class App {
 async run(){
  try {
    const input = await Console.readLineAsync(MESSAGES.START_MESSAGE)
    const numbers = inputParser(input);
    const sum = calculator(numbers);
    Console.print(MESSAGES.RESULT_MESSAGE(sum));
  } catch (error) {
    Console.print(MESSAGES.ERROR_MESSAGE(error));
    throw error;
  }
 }
}

export default App; 