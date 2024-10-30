/*=== LOCAL STORAGE ===*/

export const handleGetProductLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem('products'))

  if (products) {
    return products
  } else {
    return []
  }
}

//GUARDAR en LocalStorage

//recibir un producto
export const setInLocalStorage = productIn => {
  if (productIn) {
    let productsInLocal = handleGetProductLocalStorage()

    const existingIndex = productsInLocal.findIndex(
      productsLocal => productsLocal.id === productIn.id
    )

    //verificar si el elemento existe
    if (existingIndex !== -1) {
      //si existe debe reemplazarse
      productsInLocal[existingIndex] = productIn
    } else {
      //Si no existe debe agregarse
      productsInLocal.push(productIn)
    }

    //Setear el nuevo array
    localStorage.setItem('products', JSON.stringify(productsInLocal))
  }
}
