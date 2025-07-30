import { getAllItems, addItem, editItem, deleteItems, PRODUCTS_STORE_NAME } from '../logic/common/indexedDB'
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
export function deleteProductsById (ids) {
  return deleteItems(ids, PRODUCTS_STORE_NAME)
}
export function addProduct(product) {
  return addItem(product, PRODUCTS_STORE_NAME)
}
export function editProductById (id, newItem) {
  return editItem(id, newItem, PRODUCTS_STORE_NAME)
}