import Calculator from "../src/service/models/Calculator.js";
import { ERROR_MESSAGES } from "../src/constants/messages.js";

describe("Calculator", () => {
  describe("GIVEN: 유효한 숫자 배열", () => {
    it("THEN: 배열의 합을 반환한다", () => {
      const positiveNumbers = [1, 2, 3, 4, 5];
      const numbersWithZero = [1, 2, 0, 4, 5];
      const singleNumber = [7];

      expect(Calculator.create(positiveNumbers).add()).toBe(15);
      expect(Calculator.create(numbersWithZero).add()).toBe(12);
      expect(Calculator.create(singleNumber).add()).toBe(7);
    });

    it("THEN: 반환값의 타입은 숫자여야 한다", () => {
      const numbers = [10, 20];
      const result = Calculator.create(numbers).add();
      expect(typeof result).toBe("number");
    });
  });

  describe("GIVEN: 빈 배열 또는 유효하지 않은 입력", () => {
    it("THEN: 0을 반환하거나 적절한 에러를 발생시킨다", () => {
      const emptyArray = [];
      const nullInput = null;
      const undefinedInput = undefined;

      expect(Calculator.create(emptyArray).add()).toBe(0);

      expect(() => Calculator.create(nullInput).add()).toThrow(ERROR_MESSAGES.INVALID_INPUT);
      expect(() => Calculator.create(undefinedInput).add()).toThrow(ERROR_MESSAGES.INVALID_INPUT);
    });
  });

  describe("GIVEN: 유효하지 않은 값이 포함된 배열", () => {
    it("THEN: INVALID_INPUT / IS_NAN / IS_NEGATIVE 에러를 발생시킨다", () => {
      const numbersWithNegative = [1, -2, 3];
      const numbersWithNaN = [1, 2, NaN];
      const notArray = "string";

      expect(() => Calculator.create(numbersWithNegative).add()).toThrow(ERROR_MESSAGES.IS_NEGATIVE);
      expect(() => Calculator.create(numbersWithNaN).add()).toThrow(ERROR_MESSAGES.IS_NAN);
      expect(() => Calculator.create(notArray).add()).toThrow(ERROR_MESSAGES.INVALID_INPUT);
    });
  });
});