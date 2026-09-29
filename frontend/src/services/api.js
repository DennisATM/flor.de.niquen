const API_URL = "http://localhost:8000"

export const obtenerProductos = async () => {
  const respuesta = await fetch(`${API_URL}/api/productos`)

  if (!respuesta.ok) {
    throw new Error("Error al obtener los productos")
  }

  const datos = await respuesta.json()

  return datos.productos
}

export const obtenerProductoPorId= async (id)=> {
  const respuesta = await fetch(`${API_URL}/api/productos/${id}`)

  if (!respuesta.ok) {
    throw new Error("Error al obtener el producto")
  }

  const datos = await respuesta.json()

  if (!datos.ok) {
    throw new Error(datos.mensaje)
  }

  return datos.producto
}

export const crearProducto = async (producto) => {
  const respuesta = await fetch(`${API_URL}/api/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(producto)
  })

  if (!respuesta.ok) {
    throw new Error("Error al crear el producto")
  }

  const datos = await respuesta.json()

  if (!datos.ok) {
    throw new Error(datos.mensaje)
  }

  return datos
}

export const actualizarProducto = async (id, producto) => {
  const respuesta = await fetch(`${API_URL}/api/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(producto)
  })

  if (!respuesta.ok) {
    throw new Error("Error al actualizar el producto")
  }

  const datos = await respuesta.json()

  if (!datos.ok) {
    throw new Error(datos.mensaje)
  }

  return datos
}

export const eliminarProducto = async (id) => {
  const respuesta = await fetch(`${API_URL}/api/productos/${id}`, {
    method: "DELETE"
  })

  if (!respuesta.ok) {
    throw new Error("Error al eliminar el producto")
  }

  const datos = await respuesta.json()

  if (!datos.ok) {
    throw new Error(datos.mensaje)
  }

  return datos
}