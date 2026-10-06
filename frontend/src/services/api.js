const API_URL = "http://localhost:8000"

async function fetchAPI(url, opciones = {}) {
  return fetch(`${API_URL}${url}`, {
    ...opciones,
    credentials: "include",
  })
}

export const obtenerProductos = async () => {
  const respuesta = await fetchAPI(`/api/productos`)

  if (!respuesta.ok) {
    throw new Error("Error al obtener los productos")
  }

  const datos = await respuesta.json()

  return datos.productos
}

export const obtenerProductoPorId= async (id)=> {
  const respuesta = await fetchAPI(`/api/productos/${id}`)

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
  const respuesta = await fetchAPI(`/api/productos`, {
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
  const respuesta = await fetchAPI(`/api/productos/${id}`, {
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
  const respuesta = await fetchAPI(`/api/productos/${id}`, {
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

export const obtenerProductosHome = async () => {
  const respuesta = await fetchAPI(`/api/productos/home`)

  if (!respuesta.ok) {
    throw new Error("Error al obtener los productos del Home")
  }

  const datos = await respuesta.json()

  if (!datos.ok) {
    throw new Error(datos.mensaje || "Error al obtener los productos del Home")
  }

  return datos.productos
}

export const obtenerProductosAdmin = async () => {
 const respuesta = await fetchAPI(`/api/productos/admin`)

  if (!respuesta.ok) {
    throw new Error("Error al obtener los productos del administrador")
  }

  const datos = await respuesta.json()

  if (!datos.ok) {
    throw new Error(
      datos .mensaje || "Error al obtener los productos del administrador"
    )
  }

  return datos.productos
}

export const restaurarProducto = async (id) => {
  const respuesta = await fetchAPI(
    `/api/productos/${id}/restaurar`,
    {
      method: "PUT"
    }
  )

  if (!respuesta.ok) {
    throw new Error("Error al restaurar el producto")
  }

  const datos = await respuesta.json()

  if (!datos.ok) {
    throw new Error(datos.mensaje)
  }

  return datos
}

export async function cerrarSesionAPI() {
  const respuesta = await fetchAPI("/api/auth/logout", {
    method: "POST"
  })

  if (!respuesta.ok) {
    throw new Error("Error al cerrar la sesión")
  }

  const datos = await respuesta.json()

  if (!datos.ok) {
    throw new Error(datos.mensaje || "No fue posible cerrar la sesión")
  }

  return datos
}