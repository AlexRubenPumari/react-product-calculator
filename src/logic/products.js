export function changeProductCount (productId, products, value) {
  return products.map(product => {
    if (product.id !== productId) return { ...product }

    return { ...product, count: product.count + 1 * value }
  })
}