import { Console } from '@woowacourse/mission-utils';

const input = {
  async readLineMessage(message) {
    const input = await Console.readLineAsync(message);
    return input;
  },
};
export default input;