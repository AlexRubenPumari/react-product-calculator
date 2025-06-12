import { useContext } from 'react'
import { ModalContext } from '../../contexts/common/modal'
import { LBLS_SIDEBAR } from '../../config/labels'
import Sidebar from './Sidebar'

export default function SidebarController ({ onClose }) {
  const { openAddProductModal, openEditProductModal, openDeleteProductModal } =
    useContext(ModalContext)
  return (
    <Sidebar
      items={LBLS_SIDEBAR}
      onClicks={[
        () => openAddProductModal(),
        () => openEditProductModal(),
        () => openDeleteProductModal(),
      ]}
      onClose={onClose}
    />
  )
}
