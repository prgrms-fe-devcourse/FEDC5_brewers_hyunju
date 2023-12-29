export const handleError = (error: unknown, messagePrefix: string) => {
  if (error instanceof Error) {
    console.error(`${messagePrefix}: ${error.message}`);
  } else {
    console.error(`${messagePrefix}: 알 수 없는 에러가 발생했습니다.`);
  }
};
