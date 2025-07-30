import { createContext, useState, useContext } from 'react'
import { PAGES } from '../../config/constants'

export const PageContext = createContext()

const { INDEX, ADD_PRODUCT, EDIT_PRODUCT, PRODUCTS_LIST_TO_EDIT, PRODUCTS_LIST_TO_DELETE } = PAGES

export default function PageProvider ({ children }) {
  const [page, setPage] = useState({ type: INDEX })
  const contextValue = {
    page,
    goProductsListToEdit: () => setPage({ type: PRODUCTS_LIST_TO_EDIT }),
    goProductsListToDelete: () => setPage({ type: PRODUCTS_LIST_TO_DELETE }),
    goIndex: () => setPage({ type: INDEX }),
    goEditProduct: product => setPage({ type: EDIT_PRODUCT, value: product }),
    goAddProduct: () => setPage({ type: ADD_PRODUCT }),
  }

  return (
    <PageContext.Provider value={contextValue}>
      {children}
    </PageContext.Provider>
  )
}

export function usePageContext() {
  const context = useContext(PageContext)

  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider')
  }

  return context
}