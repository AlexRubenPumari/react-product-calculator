import { getItemById, IMAGES_STORE_NAME } from '../logic/common/indexedDB'

export function getImageById(id) {
  return getItemById(id, IMAGES_STORE_NAME)
}