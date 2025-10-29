import { Console } from '@woowacourse/mission-utils';
import { UI_MESSAGES } from '../constants/messages.js';

class OutputView {
  static printSum(sum) {
    Console.print(UI_MESSAGES.RESULT(sum));
  }   
}

export default OutputView;