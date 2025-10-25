import calculator from "../src/service/models/calculator.js";
import { ERROR_MESSAGES } from "../src/constants/messages";

describe("calculator", () => {
  describe("GIVEN: 유효 숫자 배열", () => {
    it("THEN: 배열의 합 반환", () => {
      const positiveNumbers = [1, 2, 3, 4, 5];
      const numbersWithZero = [1, 2, 0, 4, 5];
      const singleNumber = [7];

      expect(calculator(positiveNumbers)).toBe(15);
      expect(calculator(numbersWithZero)).toBe(12);
      expect(calculator(singleNumber)).toBe(7);
    });

    it("THEN: 반환값의 타입은 숫자", () => {
      const numbers = [10, 20];
      const result = calculator(numbers);
      expect(typeof result).toBe('number');
    });
  });

  describe("GIVEN: 빈 배열", () => {
    it("THEN: 0 반환", () => {
      const emptyArray = [];
      const nullInput = null;
      const undefinedInput = undefined;

      expect(calculator(emptyArray)).toBe(0);
      expect(calculator(nullInput)).toBe(0);
      expect(calculator(undefinedInput)).toBe(0);
    });
  });

  describe("GIVEN: 유효하지 않은 배열", () => {
    it("THEN: INVALID_INPUT 에러를 던진다", () => {
      const numbersWithNegative = [1, -2, 3];
      const numbersWithNaN = [1, 2, NaN];

      expect(() => calculator(numbersWithNegative)).toThrow(ERROR_MESSAGES.INVALID_INPUT);
      expect(() => calculator(numbersWithNaN)).toThrow(ERROR_MESSAGES.INVALID_INPUT);
    });
  });
});