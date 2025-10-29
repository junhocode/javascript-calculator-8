import { Console } from '@woowacourse/mission-utils';
import { UI_MESSAGES } from '../constants/messages';

class InputView {
  static async getUserInput() { 
    const userInput = await Console.readLineAsync(UI_MESSAGES.START);
    return userInput;
  }
}

export default InputView;