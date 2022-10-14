export function checkForEmptyInputs(email: string, password: string) {
  if (password === '' && email === '') {
    return 'Password and Email is missing';
  }
  if (password === '') {
    return 'Password is missing';
  }
  if (email === '') {
    return 'Email is missing';
  }
  return '';
}

export function stringConversion(string: string) {
  const firstCharCheck = string[0] === '0' ? string.substring(1) : string;
  const secondCharCheck =
    firstCharCheck[0] === '0' ? firstCharCheck.substring(1) : firstCharCheck;
  const thirdCharCheck =
    secondCharCheck[0] === '0' ? secondCharCheck.substring(1) : secondCharCheck;

  return thirdCharCheck;
}
