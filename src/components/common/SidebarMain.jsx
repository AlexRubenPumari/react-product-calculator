import { useContext } from 'react'
import { PageContext } from '../../contexts/common/page'
import Sidebar from './Sidebar'

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
