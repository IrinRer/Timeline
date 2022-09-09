export const addZero = (index: number): number | string => {
  return index > 9 ? index : `0${index}`;
};
