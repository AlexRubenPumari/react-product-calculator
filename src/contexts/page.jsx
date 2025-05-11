import { createContext, useState } from 'react'
import { PAGES } from '../config/constants'

export const PageContext = createContext()

export default function PageProvider ({ children }) {
  const [page, setPage] = useState(PAGES.INDEX)
  const goIndexPage = () => setPage(PAGES.INDEX)
  const goAddProductPage = () => setPage(PAGES.ADD_PRODUCT)

  return (
    <PageContext.Provider value={{
      page,
      goIndexPage,
      goAddProductPage,
    }}>
      { children }
    </PageContext.Provider>
  )
}