import parser from "../src/service/models/parser.js";
import { ERROR_MESSAGES } from "../src/constants/messages.js";

describe("parser", () => {
  describe("GIVEN: 기본 구분자", () => {
    it("THEN: 구분자 기준 나뉜 숫자 배열 반환", () => {
      const input1 = "1,2,3";
      const input2 = "1:2:3";
      const input3 = "1,2:3";
      const input4 = "5";

      expect(parser(input1)).toEqual([1, 2, 3]);
      expect(parser(input2)).toEqual([1, 2, 3]);
      expect(parser(input3)).toEqual([1, 2, 3]);
      expect(parser(input4)).toEqual([5]);
    });
  });

  describe("GIVEN: 커스텀 구분자", () => {
    it("THEN: 커스텀 구분자, 기본 구분자 모두 사용해 나뉜 숫자 배열 반환", () => {
      const inputWithCustomDelimiter = "//;\\n1;2;3";
      const inputWithMixedDelimiters = "//;\\n1;2,3:4";

      expect(parser(inputWithCustomDelimiter)).toEqual([1, 2, 3]);
      expect(parser(inputWithMixedDelimiters)).toEqual([1, 2, 3, 4]);
    });

    describe("GIVEN: 숫자가 없는 문자열", () => {
      it("THEN: 0 배열 반환", () => {
        const input = "//;\\n";
        expect(parser(input)).toEqual([0]);
      });
    });
  });

  describe("GIVEN: 예외", () => {
    it("THEN: 빈 배열 반환", () => {
      expect(parser(null)).toEqual([]);
      expect(parser(undefined)).toEqual([]);
      expect(parser("")).toEqual([]);
      expect(parser("  ")).toEqual([]);
    });

    it("THEN: 에러를 던진다", () => {
      const inputWithNumberDelimiter = "//1\\n1,2,3";
      const inputWithWhitespaceDelimiter = "// \\n1 2,3";

      expect(() => parser(inputWithNumberDelimiter)).toThrow(ERROR_MESSAGES.INVALID_DELIMITER);
      expect(() => parser(inputWithWhitespaceDelimiter)).toThrow(ERROR_MESSAGES.INVALID_DELIMITER);
    });
  });
});