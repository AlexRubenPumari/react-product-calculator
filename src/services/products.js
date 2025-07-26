import { getAllItems, addItem, editItem, PRODUCTS_STORE_NAME } from '../logic/common/indexedDB'
import { getImageById } from './images'

export async function getAllProducts() {
  const productsWithoutImg = await getAllItems(PRODUCTS_STORE_NAME)
  const products = await Promise.all(
    productsWithoutImg.map(async (product) => {
      const img = await getImageById(product.idImg)
      return { ...product, img }
    })
  )
  return products
}
export function addProduct(product) {
  return addItem(product, PRODUCTS_STORE_NAME)
}
export function editProductById (id, item) {
  return editItem(id, item, PRODUCTS_STORE_NAME)
}
// export function deleteProduct ()