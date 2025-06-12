import { useModalContext } from '../../hooks/common/useModalContext'
import { MODAL as M } from '../../config/constants'
import Header from './Header'
import ListOfProducts from '../products/ListOfProducts'
import ModalAddProduct from '../products/ModalAddProduct'
import Footer from './Footer'

export default function IndexPage() {
  const { modal, closeModal } = useModalContext()
  return (
    <>
      <Header />
      <main className='flex-grow py-9 overflow-hidden'>
        <ListOfProducts
          className='max-w-3xl h-full mx-auto flex flex-wrap gap-x-2 gap-y-7 Scrollbar'
        />
      </main>
      <Footer />
      {modal && <ModalController type={modal} onClose={() => closeModal()} />}
    </>
  )
}
function ModalController ({ type, onClose }) {
  if (type === M.ADD_PRODUCT) {
    return <ModalAddProduct onClose={onClose} />
  }
}