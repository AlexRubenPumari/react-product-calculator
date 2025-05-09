import CardProduct from './CardProduct'

export default function ListOfProducts({ products }) {
  if (products?.length === 0) return (
    <p className=''>Without products!</p>
  )

  return products.map(({ id, name, price, count }) => (
    <CardProduct
      key={id}
      className='basis-44 flex-grow'
      name={name}
      price={price}
      count={count}
    />
  ))
}
