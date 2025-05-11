import { useContext } from 'react'
import Sidebar from './Sidebar'
import { PageContext } from '../contexts/page'

export default function SidebarMain({ onClose }) {
  const { goAddProductPage } = useContext(PageContext)
  return (
    <Sidebar
      items={[
        'Add product',
        'Edit product',
        'Delete product',
        'Image'
      ]}
      onClicks={[
        () => (onClose(), goAddProductPage()),
        () => null,
        () => null,
        () => null,
      ]}
      onClose={onClose}
    />
  )
}
