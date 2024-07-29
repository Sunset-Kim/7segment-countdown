export const zeroPad = (num: number, places: number): string => {
  let str = String(num);
  while (str.length < places) {
    str = "0" + str;
  }
  return str;
};
