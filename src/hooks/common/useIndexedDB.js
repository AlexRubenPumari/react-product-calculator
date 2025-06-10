import { useState, useEffect, useRef } from 'react'

export function useIndexedDB() {
  const [db, setDb] = useState(null)
  const getAllProducts = () => {
    return new Promise((resolve, reject) => {
      if (!db) reject('La base de datos no está inicializada.')

      const transaction = db.transaction('products')
      const objectStore = transaction.objectStore('products')
      const request = objectStore.getAll()

      request.onerror = (event) => {
        console.error('Error al leer productos:', event)
        // setError('Error al cargar los productos.');
        reject('Error al leer los productos.')
      }

      request.onsuccess = (event) => {
        console.log('Productos obtenidos:', request.result)
        // setProducts(request.result)
        resolve(request.result)
      }
      // request.onerror = (event) => {
      //   console.log('error al hacer la lectura')
      // }
      // request.onsuccess = (event) => {
      //   console.log('Resultado?', request.result)
      //   setProducts(request.result)
      // }
    })
  }
  useEffect(() => {
    const request = window.indexedDB.open('App', 1)

    request.onerror = function (e) {
      alert("Why didn't you allow my web app to use IndexedDB?!")
    }
    request.onsuccess = function (e) {
      console.log('Base de datos abierta correctamente')
      setDb(e.target.result)
    }
    request.onupgradeneeded = e => {
      const db = e.target.result
      if (
        db.objectStoreNames.contains('products') ||
        db.objectStoreNames.contains('images')
      )
        return

      const productsOS = db.createObjectStore('products', {
        keyPath: 'id',
        autoIncrement: true,
      })
      const imagesOS = db.createObjectStore('images', {
        keyPath: 'id',
        autoIncrement: true,
      })
      console.log('Object Stores creados.')
    }
  }, [])
  return { db, getAllProducts }
}
