export const addCommas = (num: number): string => {
  return Number(num.toFixed(2)).toLocaleString("en-IN");
};
