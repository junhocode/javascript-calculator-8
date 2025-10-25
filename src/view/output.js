import { Console } from '@woowacourse/mission-utils';

const output = {
  async printMessage(message) {
    await Console.print(message);
  },
};
export default output;