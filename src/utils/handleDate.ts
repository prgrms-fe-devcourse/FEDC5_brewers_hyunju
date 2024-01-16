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

export const isUpdated = (
  createdISOdate: string,
  updatedISOdate: string | undefined
) => {
  if (updatedISOdate === undefined) return false;
  const date1 = new Date(createdISOdate);
  const date2 = new Date(updatedISOdate);
  if (date1 < date2) {
    return true;
  }
  return false;
};
