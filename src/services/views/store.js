/* === STORE === */

import { setProductoActivo } from '../../../main'
import { handleGetProductLocalStorage } from '../persistence/localstorage'
import { openModal } from './modal'

//Función que trae elementos y llama al render
export const handleGetProductsToStore = () => {
  const products = handleGetProductLocalStorage()
  handleRenderList(products)
}

//Función que filtra y renderiza los productos en sus secciones
export const handleRenderList = productsIn => {
  const burgers = productsIn.filter(el => el.categoria === 'Hamburguesas')
  const papas = productsIn.filter(el => el.categoria === 'Papas')
  const gaseosas = productsIn.filter(el => el.categoria === 'Gaseosas')

  //Define cada sección para los productos
  const renderProductGroup = (products, title) => {
    if (products.length > 0) {
      const productsHTML = products.map((product, index) => {
        return `
        <div class="containerTargetItem" id="product-${product.categoria}-${index}"> 
          <div> 
            <img src='${product.imagen}' />
            <div>
              <div>
                <h2>${product.nombre}</h2>
              </div>
              <div class="targetProps">
                <p><b>Precio:</b> $ ${product.precio} </p>
              </div>
            </div>
          </div>
        </div>
        `
      })

      return `
      <section class="sectionStore">
        <div class="containerTitleSection">
          <h3>${title}</h3>
        </div>
        <div class="containerProductStore">
        ${productsHTML.join('')}
        </div>
      </section>
      `
    } else {
      return ''
    }
  }

  //renderizar cada uno de los productos dentro de su categoria
  const appContainer = document.getElementById('storeContainer')
  appContainer.innerHTML = `
  ${renderProductGroup(burgers, 'Hamburguesas')}
  ${renderProductGroup(papas, 'Papas')}
  ${renderProductGroup(gaseosas, 'Gaseosas')}
  `
  //Se añaden los eventos de manera dinámica
  const addEvents = productsIn => {
    if (productsIn) {
      productsIn.forEach((element, index) => {
        const productContainer = document.getElementById(
          `product-${element.categoria}-${index}`
        )
        productContainer.addEventListener('click', () => {
          setProductoActivo(element)
          openModal()
        })
      })
    }
  }

  addEvents(burgers)
  addEvents(papas)
  addEvents(gaseosas)
}
