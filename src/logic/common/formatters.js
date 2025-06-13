export function isNumber (char) {
  return '0123456789'.includes(char)
}

export function isDecimal (char) {
  return isNumber(char) || char === '.'
}