import { usePageContext } from '../../contexts/common/page'
import { LBLS_SIDEBAR } from '../../config/labels'
import Sidebar from './Sidebar'

export default function SidebarController ({ onClose }) {
  const {
    goProductsListToEdit,
    goIndex,
    goAddProduct,
    goProductsListToDelete,
  } = usePageContext()
  
  const onClicks = [
    goIndex,
    goAddProduct,
    goProductsListToEdit,
    goProductsListToDelete,
  ]
  
  return <Sidebar items={LBLS_SIDEBAR} onClicks={onClicks} onClose={onClose} />
}
