import { DEFAULT_PRODUCT_IMAGES } from '../../config/constants'

export const DB_NAME = 'ReactAppDB'
export const DB_VERSION = 4
export const PRODUCTS_STORE_NAME = 'products'
export const IMAGES_STORE_NAME = 'images'

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
      if (!db.objectStoreNames.contains(IMAGES_STORE_NAME)) {
        const objectStore = db.createObjectStore(
          IMAGES_STORE_NAME, { keyPath: 'id', autoIncrement: true }
        )

        objectStore.transaction.oncomplete = () => {
          addItems(DEFAULT_PRODUCT_IMAGES, IMAGES_STORE_NAME)
        }
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
  })
}

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

export const addItems = async (items, storeName) => {
  const dbInstance = await openDB()
  const transaction = dbInstance.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)

  return new Promise((resolve, reject) => {
    const requests = []

    items.forEach(item => {
      const request = store.add(item)
      requests.push(request)

      request.onerror = e => reject(e.target.errorCode)
    })

    transaction.oncomplete = () => {
      const results = requests.map(req => req.result)
      resolve(results)
    }

    transaction.onerror = e => {
      reject(e.target.errorCode)
    }
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

export const getItemById = async (id, storeName) => {
  const dbInstance = await openDB()
  const transaction = dbInstance.transaction([storeName])
  const store = transaction.objectStore(storeName)

  return new Promise((resolve, reject) => {
    const request = store.get(id)
    request.onsuccess = e => {
      const data = e.target.result
      if (!data) reject(`Item with id ${id} not found`)

      resolve(data)
    }
    request.onerror = e => reject(e.target.errorCode)
  })
}

export const editItem = async (id, item, storeName) => {
  const db = await openDB()

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readwrite')
    const objectStore = transaction.objectStore(storeName)

    transaction.onerror = e => reject(e.target.error)
    transaction.onabort = e => reject(e.target.error)

    const request = objectStore.get(id)

    request.onerror = e => reject(e.target.error)
    request.onsuccess = e => {
      const data = e.target.result

      if (!data) return reject(new Error(`No item found with id ${id}`))

      Object.assign(data, item)

      const updateRequest = objectStore.put(data)
      updateRequest.onerror = e => reject(e.target.error)
      updateRequest.onsuccess = () => resolve(data)
    }
  })
}

export const deleteItems = async (ids, storeName) => {
  const db = await openDB()
  const transaction = db.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)

  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve(ids)
    transaction.onerror = e => reject(e.target.error)
    transaction.onabort = e => reject(e.target.error)

    ids.forEach(id => {
      const request = store.delete(id)
      request.onerror = e => {
        console.error(`Error deleting id ${id}:`, e.target.error)
        transaction.abort()
      }
    })
  })
}