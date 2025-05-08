import products from '../../mooks/products.json'
import ListOfProducts from '../ListOfProducts'

export default function Main() {
  return (
    <main className='flex-grow py-9 overflow-hidden'>
      <div className='h-full flex flex-wrap gap-x-2 gap-y-4 overflow-auto'>
        <ListOfProducts products={products} />
      </div>
    </main>
  )
}
