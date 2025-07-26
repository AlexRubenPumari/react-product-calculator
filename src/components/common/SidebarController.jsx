import { useModalContext } from '../../contexts/common/modal'
import { LBLS_SIDEBAR } from '../../config/labels'
import Sidebar from './Sidebar'

export default function SidebarController ({ onClose }) {
  const {
    openAddProductModal,
    openProductListToEditModal,
    openDeleteProductModal
  } = useModalContext()
  
  const onClicks = [
    openAddProductModal,
    openProductListToEditModal,
    openDeleteProductModal
  ]
  
  return <Sidebar items={LBLS_SIDEBAR} onClicks={onClicks} onClose={onClose} />
}
