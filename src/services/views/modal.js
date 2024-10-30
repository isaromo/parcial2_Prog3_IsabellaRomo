/*===POP UP===*/

import { productoActivo, setProductoActivo } from '../../../main'
import { handleDeleteProduct } from '../products'

const cancelButton = document.getElementById('cancelButton')

cancelButton.addEventListener('click', () => {
  closeModal()
})

//Abrir modal
export const openModal = () => {
  const modal = document.getElementById('modalPopUp')
  modal.style.display = 'flex'

  const buttonDelete = document.getElementById('deleteButton')
  if (productoActivo) {
    buttonDelete.style.display = 'block'
  } else {
    buttonDelete.style.display = 'none'
  }

  if (productoActivo) {
    const nombre = document.getElementById('nombre'),
      imagen = document.getElementById('img'),
      precio = document.getElementById('precio'),
      categoria = document.getElementById('categoria')

    nombre.value = productoActivo.nombre
    imagen.value = productoActivo.imagen
    precio.value = productoActivo.precio
    categoria.value = productoActivo.categoria
  }
}
//Cerrar modal
export const closeModal = () => {
  const modal = document.getElementById('modalPopUp')
  modal.style.display = 'none'
  setProductoActivo(null)
  resetModal()
}

//Reset props
const resetModal = () => {
  const nombre = document.getElementById('nombre'),
    imagen = document.getElementById('img'),
    precio = document.getElementById('precio'),
    categoria = document.getElementById('categoria')

  nombre.value = ''
  imagen.value = ''
  precio.value = ''
  categoria.value = ''
}

const deleteButton = document.getElementById('deleteButton')
deleteButton.addEventListener('click', () => {
  handleButtonDelete()
})

const handleButtonDelete = () => {
  handleDeleteProduct()
}
