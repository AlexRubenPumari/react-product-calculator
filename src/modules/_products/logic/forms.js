export function isValidChar (char, string) {
  return string.includes(char)
}
export function isValidDecimal (char) {
  return isValidChar(char, '.0123456789')
}