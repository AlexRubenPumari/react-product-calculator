import ListOfProducts from '../components/products/ListOfProducts'
import Footer from '../components/common/Footer'

export default function IndexPage() {
  return (
    <>
      <main className='flex-grow py-9 overflow-hidden'>
        <ListOfProducts
          className='max-w-3xl h-full mx-auto flex flex-wrap gap-x-2 gap-y-7 Scrollbar'
        />
      </main>
      <Footer />
    </>
  )
}