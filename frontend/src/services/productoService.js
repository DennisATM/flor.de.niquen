import { 
  obtenerProductoPorId, 
  obtenerProductos,
  obtenerProductosAdmin,
  obtenerProductosHome,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
  restaurarProducto
 } from "./api"

export const listarProductos = async () => {
  return await obtenerProductos()
}

export const listarProductosAdmin = async () => {
  return await obtenerProductosAdmin()
}

export const buscarProductoPorId = async (id) => {
  return await obtenerProductoPorId(id)
}

export const guardarProducto = async (producto) => {
  return await crearProducto(producto)
}

export const editarProducto = async (id, producto) => {
  return await actualizarProducto(id, producto)
}

export const borrarProducto = async (id) => {
  return await eliminarProducto(id)
}

export const listarProductosHome = async () => {
  return await obtenerProductosHome()
}

export const restaurarProductoAdmin = async (id) => {
  return await restaurarProducto(id)
}
