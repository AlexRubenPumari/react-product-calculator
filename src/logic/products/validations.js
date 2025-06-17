import { isFormattedPrice } from '../common/validations'

export function isValidProductName (productName) {
  if (productName.length === 0) return 'Name field is required'
}

export function isValidProductPrice (productPrice) {
  if (productPrice.length === 0) return 'Price field is required'
  if (!isFormattedPrice(productPrice)) return 'Price not formatted'
}

export function isValidProductImg (productImg) {
  if (!productImg) return 'Image field is required'
}