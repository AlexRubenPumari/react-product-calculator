export function changeProductCount ({ id, products, step, min, max }) {
  return products.map(product => {
    if (product.id !== id) return { ...product }

    if (product.count + 1 * step < min || product.count + 1 * step > max) {
      return { ...product }
    } else {
      return { ...product, count: product.count + 1 * step }
    }
  })
}

export function getTotal (products) {
  return products.reduce((total, { price, count }) => total + price * count, 0)
}