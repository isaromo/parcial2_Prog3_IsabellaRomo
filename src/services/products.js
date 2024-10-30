//Guardar o modificar elementos
import Swal from 'sweetalert2'
import { productoActivo } from '../../main'
import {
  handleGetProductLocalStorage,
  setInLocalStorage,
} from './persistence/localstorage'
import { closeModal } from './views/modal'
import { handleGetProductsToStore, handleRenderList } from './views/store'

const acceptButton = document.getElementById('acceptButton')
acceptButton.addEventListener('click', () => {
  handleSaveOrModifyElements()
})

const handleSaveOrModifyElements = () => {
  const nombre = document.getElementById('nombre').value,
    imagen = document.getElementById('img').value,
    precio = document.getElementById('precio').value,
    categoria = document.getElementById('categoria').value

  let object = null

  if (productoActivo) {
    object = {
      ...productoActivo,
      nombre,
      imagen,
      precio,
      categoria,
    }
  } else {
    object = {
      id: new Date().toISOString(),
      nombre,
      imagen,
      precio,
      categoria,
    }
  }

  setInLocalStorage(object)
  handleGetProductsToStore()
  closeModal()
}

// Eliminar producto

export const handleDeleteProduct = () => {
  //Modal que confirma la eliminación del producto
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción es permanente',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar',
  }).then(result => {
    if (result.isConfirmed) {
      const products = handleGetProductLocalStorage()
      const result = products.filter(el => el.id !== productoActivo.id)
      //Setear el nuevo array
      localStorage.setItem('products', JSON.stringify(result))
      const newProducts = handleGetProductLocalStorage()
      handleRenderList(newProducts)
      closeModal()
    } else {
      closeModal()
    }
  })
}
