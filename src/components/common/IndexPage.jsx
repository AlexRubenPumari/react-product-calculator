import Footer from './Footer'
import ListOfProducts from '../products/ListOfProducts'
import Header from './Header'

export default function IndexPage() {
  return (
    <>
      <Header />
      <main className='flex-grow py-9 overflow-hidden'>
        <ListOfProducts
          className='max-w-3xl h-full mx-auto flex flex-wrap gap-x-2 gap-y-7 Scrollbar'
        />
      </main>
      <Footer />
    </>
  )
}
