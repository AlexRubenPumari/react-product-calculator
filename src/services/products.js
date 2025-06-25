import { getAllItems, PRODUCTS_STORE_NAME } from '../logic/common/indexedDB'

export function getAllProducts () {
  return getAllItems(PRODUCTS_STORE_NAME)
}
// export function editProduct () 
// export function addProduct ()
// export function deleteProduct ()