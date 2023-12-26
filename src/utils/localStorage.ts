const storage = window.localStorage;

export const getItem = <T>(key: string, defualtValue: T) => {
  try {
    const storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defualtValue;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error('localStorage: 알 수 없는 에러가 발생했습니다. (getItem)');
    }
  }
};

export const setItem = <T>(key: string, value: T) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error('localStorage: 알 수 없는 에러가 발생했습니다. (setItem)');
    }
  }
};

export const removeItem = (key: string) => {
  try {
    storage.removeItem(key);
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.error(
        'localStorage: 알 수 없는 에러가 발생했습니다. (removeItem)'
      );
    }
  }
};
