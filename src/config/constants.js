export const PAGES = {
  INDEX: 0,
  ADD_PRODUCT: 1,
  EDIT_PRODUCT: 2,
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
  { type: ICE_CREAM_TYPES.CONE, styles: { hasShine: true, iceCreamColor: '#7B3F00' } },
  { type: ICE_CREAM_TYPES.CONE, styles: { hasShine: true, iceCreamColor: '#fff8dc' } },
  { type: ICE_CREAM_TYPES.LOLLY, styles: { hasShine: true, iceCreamColor: '#6F2DA8' } },
  { type: ICE_CREAM_TYPES.LOLLY, styles: { hasShine: true, iceCreamColor: '#FF4F79' } },
  { type: ICE_CREAM_TYPES.LOLLY, styles: { hasShine: true, iceCreamColor: '#FFCBA4' } },
  { type: ICE_CREAM_TYPES.TUB, styles: { iceCreamColor: '#fc5a8d' } },
  { type: ICE_CREAM_TYPES.TUB, styles: { iceCreamColor: '#f3e5ab' } },
  { type: ICE_CREAM_TYPES.TUB, styles: { iceCreamColor: '#c68642' } },
  { type: ICE_CREAM_TYPES.TUB, styles: { iceCreamColor: '#3b3b3b' } },
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