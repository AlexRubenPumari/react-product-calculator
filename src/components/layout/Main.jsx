import products from '../../mooks/products.json'
import ListOfProducts from '../ListOfProducts'

export default function Main() {
  return (
    <main className='flex-grow py-9 overflow-hidden'>
      <div className='max-w-3xl h-full mx-auto flex flex-wrap gap-x-2 gap-y-7 overflow-auto scrollbar-thin scrollbar-thumb-lime-600 scrollbar-thumb-rounded'>
        <ListOfProducts products={products} />
        <GhostFlexItems />
      </div>
    </main>
  )
}
function GhostFlexItems () {
  return (
    <>
      <div className='basis-44 flex-grow'></div>
      <div className='basis-44 flex-grow'></div>
      <div className='basis-44 flex-grow'></div>
    </>
  )
}
