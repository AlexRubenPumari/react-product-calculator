export const PAGES = {
  INDEX: 0,
  ADD_PRODUCT: 1,
  EDIT_PRODUCT: 2,
  DELETE_PRODUCT: 3,
  ADD_IMG: 4,
  EDIT_IMG: 5,
  DELETE_IMG: 6,
}
export const arrayTableHeader = [
  { value: 'name' },
  { value: 'price', className: 'hidden sm:table-cell' },
  { value: 'count', className: 'hidden sm:table-cell' },
  { value: 'total' },
]