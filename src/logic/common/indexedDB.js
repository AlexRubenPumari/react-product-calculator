const DB_NAME = 'ReactAppDB'
const DB_VERSION = 1
const PRODUCTS_STORE_NAME = 'products'

let db

/**
 * Abre la base de datos IndexedDB.
 * @returns {Promise<IDBDatabase>} Una promesa que resuelve con la referencia a la base de datos.
 */
export const openDB = () => {
  return new Promise((resolve, reject) => {
    if (db) resolve(db)

    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = (e) => {
      db = e.target.result
      if (!db.objectStoreNames.contains(PRODUCTS_STORE_NAME)) {
        db.createObjectStore(
          PRODUCTS_STORE_NAME, { keyPath: 'id', autoIncrement: true }
        )
      }
    }

    request.onsuccess = (e) => {
      db = e.target.result
      resolve(db)
    }

    request.onerror = (e) => {
      console.error('Error al abrir IndexedDB:', e.target.errorCode)
      reject(new Error('Error al abrir la base de datos.'))
    }
  });
};

/**
 * Agrega un nuevo item al Object Store que indiquemos.
 * @param {Object} item El item a agregar.
 * @param {String} storeName El item a agregar.
 * @returns {Promise<number>} Una promesa que resuelve con la key del item agregado.
 */
export const addItem = async (item, storeName) => {
  const dbInstance = await openDB()
  const transaction = dbInstance.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)

  return new Promise((resolve, reject) => {
    const request = store.add(item)
    request.onsuccess = () => resolve(request.result)
    request.onerror = e => reject(e.target.errorCode)
  })
}

/**
 * Obtiene todos los items del Object Store que indiquemos.
 * @returns {Promise<Array<Object>>} Una promesa que resuelve con un array de items.
 */
export const getAllItems = async (storeName) => {
  const dbInstance = await openDB()
  const transaction = dbInstance.transaction([storeName], 'readonly')
  const store = transaction.objectStore(storeName)

  return new Promise((resolve, reject) => {
    const request = store.getAll()
    request.onsuccess = () => resolve(request.result)
    request.onerror = e => reject(e.target.errorCode)
  })
}

// Puedes añadir funciones para updateItem, deleteItem, etc.