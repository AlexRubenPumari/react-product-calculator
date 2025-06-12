import { createContext, useState } from 'react'
import { MODAL } from '../../config/constants'

export const ModalContext = createContext()

export default function ModalProvider ({ children }) {
  const [modal, setModal] = useState(null)
  const closeModal = () => setModal(null)
  const openAddProductModal = () => setModal(MODAL.ADD_PRODUCT)
  const openEditProductModal = () => setModal(MODAL.EDIT_PRODUCT)
  const openDeleteProductModal = () => setModal(MODAL.DELETE_PRODUCT)

  return (
    <ModalContext.Provider value={{
        modal,
        closeModal,
        openAddProductModal,
        openEditProductModal,
        openDeleteProductModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}