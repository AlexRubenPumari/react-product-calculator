export function isNumber (char) {
  return '0123456789'.includes(char)
}

export function isDecimal (char) {
  return isNumber(char) || char === '.'
}

export function isFormattedPrice (string) {
  const dots = string.match(/\./g)

  if (!dots || dots.length === 1) return true
}