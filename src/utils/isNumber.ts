export const isNumber = (n: any): boolean => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
