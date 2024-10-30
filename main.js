import { renderCategories } from './src/services/categories'
import { handleSearchProductByName } from './src/services/searchBar'
import { openModal } from './src/services/views/modal'
import { handleGetProductsToStore } from './src/services/views/store'
import './style.css'

/* === APLICACION === */
export let categoriaActiva = null

export const setCategoriaActiva = categoriaIn => {
  categoriaActiva = categoriaIn
}

export let productoActivo = null

export const setProductoActivo = productoIn => {
  productoActivo = productoIn
}

handleGetProductsToStore()
renderCategories()

// HEADER
const buttonAdd = document.getElementById('btnAddElement')

buttonAdd.addEventListener('click', () => {
  openModal()
})

// barra de búsqueda
const buttonSearch = document.getElementById('buttonSearch')
buttonSearch.addEventListener('click', () => {
  handleSearchProductByName()
})

const searchBar = document.getElementById('inputHeader')
searchBar.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    handleSearchProductByName()
  }
})
