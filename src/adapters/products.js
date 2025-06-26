export function mapProductsFromStorageToUI (productsArray) {
  return productsArray.map(({ id, img, name, price }) => (
    { id, img, name, price, count: 0 }
  ))
}

export function prepareProductForStorage ({ name, price, img }) {
  return { name, price: Number(price), idImg: img.id }
}

export function prepareProductForUI (id, { name, price, img }) {
  return { id, name, price: Number(price), img, count: 0 }
}