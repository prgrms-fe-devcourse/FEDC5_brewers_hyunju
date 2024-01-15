export const handleDate = (ISOdate: string) => {
  const date = new Date(ISOdate);

  const formattedDate = date.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true, // 24시간
  });

  return formattedDate;
};
