export function stringConversion(string: string) {
  const firstCharCheck = string[0] === '0' ? string.substring(1) : string;
  const secondCharCheck =
    firstCharCheck[0] === '0' ? firstCharCheck.substring(1) : firstCharCheck;
  const thirdCharCheck =
    secondCharCheck[0] === '0' ? secondCharCheck.substring(1) : secondCharCheck;

  return thirdCharCheck;
}
