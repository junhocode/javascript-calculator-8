import CalculatorController from "../src/controller/CalculatorController.js";
import InputView from "../src/view/InputView.js";
import OutputView from "../src/view/OutputView.js";
import Parser from "../src/service/models/Parser.js";
import Calculator from "../src/service/models/Calculator.js";

jest.mock("../src/view/InputView.js");
jest.mock("../src/view/OutputView.js");
jest.mock("../src/service/models/Parser.js");
jest.mock("../src/service/models/Calculator.js");

describe("CalculatorController", () => {
  let controller;

  beforeEach(() => {
    controller = new CalculatorController();
    jest.clearAllMocks();
  });

  describe("정상 실행 로직 테스트", () => {
    it("사용자 입력을 받아 합계를 올바르게 계산하고 출력해야 한다", async () => {
      const userInput = "1,2,3";
      const parsedNumbers = [1, 2, 3];
      const sum = 6;

      InputView.getUserInput.mockResolvedValue(userInput);

      const mockParse = jest.fn().mockReturnValue(parsedNumbers);
      Parser.mockImplementation(() => ({
        parse: mockParse,
      }));

      const mockAdd = jest.fn().mockReturnValue(sum);
      Calculator.create.mockReturnValue({
        add: mockAdd,
      });

      await controller.run();

      expect(InputView.getUserInput).toHaveBeenCalledTimes(1);
      expect(Parser).toHaveBeenCalledWith(userInput);
      expect(mockParse).toHaveBeenCalledTimes(1);
      expect(Calculator.create).toHaveBeenCalledWith(parsedNumbers);
      expect(mockAdd).toHaveBeenCalledTimes(1);
      expect(OutputView.printSum).toHaveBeenCalledWith(sum);
    });
  });

  describe("예외 처리 로직 테스트", () => {
    it("실행 중 에러가 발생하면 해당 에러를 다시 던져야 한다", async () => {
      const expectedError = new Error("사용자 입력 오류!");
      InputView.getUserInput.mockRejectedValue(expectedError);

      await expect(controller.run()).rejects.toThrow(expectedError);
      expect(OutputView.printSum).not.toHaveBeenCalled();
    });
  });
});