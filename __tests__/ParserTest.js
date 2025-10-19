import inputParser from "../src/inputParser.js";
import MESSAGES from "../src/messages.js";

describe("inputParser", () => {
  describe("기본 구분자", () => {
    test("쉼표 구분자 테스트", () => {
      const input = "1,2,3";
      expect(inputParser(input)).toEqual([1, 2, 3]);
    });

    test("콜론 구분자 테스트", () => {
      const input = "1:2:3";
      expect(inputParser(input)).toEqual([1, 2, 3]);
    });

    test("쉼표, 콜론 구분자 테스트", () => {
      const input = "1,2:3";
      expect(inputParser(input)).toEqual([1, 2, 3]);
    });

    test("단일 숫자 테스트", () => {
      const input = "5";
      expect(inputParser(input)).toEqual([5]);
    });
  });

  describe("커스텀 구분자", () => {
    test("커스텀 구분자 테스트", () => {
      const input = "//;\\n1;2;3";
      expect(inputParser(input)).toEqual([1, 2, 3]);
    });

    test("커스텀, 기본 구분자 테스트", () => {
      const input = "//;\\n1;2,3:4";
      expect(inputParser(input)).toEqual([1, 2, 3, 4]);
    });

    test("숫자 없는 커스텀 구분자 테스트", () => {
      const input = "//;\\n";
      expect(inputParser(input)).toEqual([0]);
    });
  });

  describe("예외 처리", () => {
    test("입력값이 null 혹은 undefined인 경우", () => {
      expect(inputParser(null)).toEqual([]);
      expect(inputParser(undefined)).toEqual([]);
    });

    test("빈 입력값인 경우 ", () => {
      expect(inputParser("")).toEqual([]);
      expect(inputParser("  ")).toEqual([]);
    });

    test("커스텀 구분자가 숫자인 경우", () => {
      const input = "//1\\n1,2,3";
      expect(() => inputParser(input)).toThrow(MESSAGES.INVALID_DELIMITER_ERROR);
    });

    test("커스텀 구분자가 공백인 경우", () => {
      const input = "// \\n1 2,3";
      expect(() => inputParser(input)).toThrow(MESSAGES.INVALID_DELIMITER_ERROR);
    });
  });

  describe("반환값 테스트", () => {
    test("반환된 배열의 모든 요소는 숫자 타입이어야 한다.", () => {
      const input = "1,2,3";
      const result = inputParser(input);
      result.forEach((item) => {
        expect(typeof item).toBe("number");
      });
    });
  });
});