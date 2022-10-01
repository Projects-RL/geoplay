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
