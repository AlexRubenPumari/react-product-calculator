import CardProduct from './CardProduct'

export default function ListOfProducts({ products }) {
  if (products?.length === 0) return <p>Without products!</p>

  return products.map(({ id, name, price, count }) => (
    <CardProduct
      key={id}
      className='basis-0 flex-grow'
      name={name}
      price={price}
      count={count}
    />
  ))
}
