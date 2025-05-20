export function isValidChar (char, string) {
  return string.includes(char)
}
export function isValidDecimal (char) {
  return isValidChar(char, '.0123456789')
}
export function isFormattedPrice (string) {
  const dots = string.match(/\./g)

  if (!dots || dots.length === 1) return true
}

export function isProductWithErrors (product) {
  let hasError
  if (product.name.value === '') {
    hasError = product.name.error = 'Name field is required'
  }
  if (!isFormattedPrice(product.price.value)) {
    hasError = product.price.error = 'Price not formatted'
  }
  if (product.price.value === '') {
    hasError = product.price.error = 'Price field is required'
  }
  if (product.img.value === null) {
    hasError = product.img.error = 'Image field is required'
  }

  return hasError ? product : null
}