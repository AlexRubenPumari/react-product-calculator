import { createContext, useState, useContext } from 'react'
import { MODAL } from '../../config/constants'

export const ModalContext = createContext()

export default function ModalProvider ({ children }) {
  const [modal, setModal] = useState(null)
  const contextValue = {
    modal,
    closeModal: () => setModal(null),
    openAddProductModal: () => setModal({ type: MODAL.ADD_PRODUCT }),
    openProductListToEditModal: () => setModal({ type: MODAL.PRODUCTS_LIST_TO_EDIT }),
    openDeleteProductModal: () => setModal({ type: MODAL.DELETE_PRODUCT }),
    openEditProductModal: product => setModal({ type: MODAL.EDIT_PRODUCT, value: product }),
  }

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModalContext() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider')
  }

  return context
}