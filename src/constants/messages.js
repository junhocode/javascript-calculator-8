export const UI_MESSAGES = {
  START: '덧셈할 문자열을 입력해 주세요.\n',
  RESULT: (sum) => `결과 : ${sum}`,
};

export const ERROR_MESSAGES = {
  INVALID_DELIMITER: '[ERROR] 커스텀 구분자는 숫자나 공백이 될 수 없습니다.',
  IS_NAN: '[ERROR] 입력 값 중 숫자가 아닌 값이 포함되어 있습니다.',
  IS_NEGATIVE: '[ERROR] 입력 값 중 음수가 포함되어 있습니다.',
  WRAPPED: (error) => `[ERROR] ${error.message}`,
};