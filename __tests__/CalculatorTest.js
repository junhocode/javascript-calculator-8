import calculator from '../src/calculator.js';
import MESSAGES from '../src/messages.js';

describe("calculator", () => {
  describe("성공 예시", () => {
    test("정상 양수 배열", () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(calculator(numbers)).toBe(15);
    });

    test("배열에 0이 포함된 경우", () => {
      const numbers = [1, 2, 0, 4, 5];
      expect(calculator(numbers)).toBe(12);
    });

    test("단일 숫자", () => {
      const numbers = [7];
      expect(calculator(numbers)).toBe(7);
    });
  });

  describe("예외 예시", () => {
    test("빈 배열인 경우", () => {
      const numbers = [];
      expect(calculator(numbers)).toBe(0);
    });

    test("배열이 아닌 경우", () => {
      expect(calculator(null)).toBe(0);
      expect(calculator(undefined)).toBe(0);
    });

    test("배열에 음수가 포함된 경우", () => {
      const numbers = [1, -2, 3];
      expect(() => calculator(numbers)).toThrow(MESSAGES.INVALID_INPUT);
    });

    test("배열에 NaN이 포함된 경우", () => {
      const numbers = [1, 2, NaN];
      expect(() => calculator(numbers)).toThrow(MESSAGES.INVALID_INPUT);
    });
  });

  describe("반환값 타입", () => {
    test("반환값 테스트", () => {
      const numbers = [10, 20];
      expect(typeof calculator(numbers)).toBe('number');
    });
  });
});