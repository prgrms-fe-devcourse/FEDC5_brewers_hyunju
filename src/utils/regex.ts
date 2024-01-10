export const testRegex = (text: string, pattern: string): boolean => {
  const patternRegex = new RegExp(pattern);
  return patternRegex.test(text);
};
