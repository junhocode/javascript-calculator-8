import Parser from "../src/service/models/Parser.js";
import { ERROR_MESSAGES } from "../src/constants/messages.js";

describe("parser", () => {
  describe("GIVEN: 기본 구분자", () => {
    it("THEN: 구분자 기준 나뉜 숫자 배열 반환", () => {
      expect(new Parser("1,2,3").parse()).toEqual([1, 2, 3]);
      expect(new Parser("1:2:3").parse()).toEqual([1, 2, 3]);
      expect(new Parser("1,2:3").parse()).toEqual([1, 2, 3]);
      expect(new Parser("5").parse()).toEqual([5]);
    });
  });

  describe("GIVEN: 커스텀 구분자", () => {
    it("THEN: 커스텀 구분자, 기본 구분자 모두 사용해 나뉜 숫자 배열 반환", () => {
      expect(new Parser("//;\\n1;2;3").parse()).toEqual([1, 2, 3]);
      expect(new Parser("//;\\n1;2,3:4").parse()).toEqual([1, 2, 3, 4]);
    });

    it("GIVEN: 숫자가 없는 문자열 THEN: 0 배열 반환", () => {
      expect(new Parser("//;\\n").parse()).toEqual([0]);
    });
  });

  describe("GIVEN: 예외", () => {
    it("THEN: 빈 배열 반환", () => {
      expect(new Parser("").parse()).toEqual([0]);
      expect(new Parser("  ").parse()).toEqual([0]);
    });

    it("THEN: 에러를 던진다", () => {
      expect(() => new Parser("//1\\n1,2,3").parse()).toThrow(
        ERROR_MESSAGES.INVALID_DELIMITER
      );
      expect(() => new Parser("// \\n1 2,3").parse()).toThrow(
        ERROR_MESSAGES.INVALID_DELIMITER
      );
    });
  });
});