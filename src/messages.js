const MESSAGES = {
  START_MESSAGE: '덧셈할 문자열을 입력해 주세요.\n',
  RESULT_MESSAGE: (sum) => `결과 : ${sum}`,
  ERROR_MESSAGE: (error) => `[ERROR] ${error.message}`,
  INVALID_DELIMITER_ERROR: '[ERROR] 커스텀 구분자는 숫자나 공백이 될 수 없습니다.',
  INVALID_INPUT: '[ERROR] 잘못된 입력입니다. 음수 또는 숫자가 아닌 값이 포함되어 있습니다.',
};

export default MESSAGES;