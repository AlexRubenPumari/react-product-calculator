export const arrayTableHeader = [
  { value: 'name' },
  { value: 'price', className: 'hidden sm:table-cell' },
  { value: 'count', className: 'hidden sm:table-cell' },
  { value: 'total' },
]
export const MODAL = {
  ADD_PRODUCT: 1,
  EDIT_PRODUCT: 2,
  DELETE_PRODUCT: 3,
  ADD_IMG: 4,
  EDIT_IMG: 5,
  DELETE_IMG: 6,
  PRODUCTS_LIST_TO_EDIT: 7,
  PRODUCTS_LIST_TO_DELETE: 8,
}
export const PRODUCT_KEYS = ['name', 'price', 'img']

export const ICE_CREAM_TYPES = {
  CONE: 1,
  TUB: 2,
  LOLLY: 3,
}

export const DEFAULT_PRODUCT_IMAGES = [
  { type: ICE_CREAM_TYPES.CONE, styles: { iceCreamColor: 'red' } },
  { type: ICE_CREAM_TYPES.CONE, styles: { hasShine: true, iceCreamColor: '#6b3700' } },
  { type: ICE_CREAM_TYPES.CONE, styles: { hasShine: false, iceCreamColor: '#6b3700' } },
  { type: ICE_CREAM_TYPES.CONE, styles: { hasShine: true, iceCreamColor: '#fff' } },
]


// const productInState = {
//   id: 1,
//   name: 'Helado de DDL',
//   price: '1000',
//   count,
//   img: {
//     id, //opcional
//     type,
//     styles: { iceCreamColor, hasShine }
//   },
// }
// const productInBD = {
//   id,
//   name,
//   price,
//   idImg,
// }

// //Tambien en BD
// const imgInState = {
//   id,
//   type
//   style: {
//     //...
//   }
// }