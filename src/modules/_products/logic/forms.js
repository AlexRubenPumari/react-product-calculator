export function isValidChar (char, string) {
  return string.includes(char)
}
export function isValidDecimal (char) {
  return isValidChar(char, '.0123456789')
}
export function isFormatedPrice (string) {
  const dots = string.match(/\./g)

  if (!dots || dots.length === 1) return true
  console.log(string, dots)
}

export function getProductWithErrors (product) {
  let hasError
  if (product.name.value === '') {
    hasError = product.name.error = 'Nombre vacio'
  }
  if (!isFormatedPrice(product.price.value)) {
    hasError = product.price.error = 'Precio no formateado'
  }
  if (product.price.value === '') {
    hasError = product.price.error = 'Precio vacio'
  }
  if (product.img.value === null) {
    hasError = product.img.error = 'Imagen vacia'
  }

  return hasError ? product : false
}