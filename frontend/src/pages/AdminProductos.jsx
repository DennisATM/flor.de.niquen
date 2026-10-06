import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import {
  listarProductosAdmin,
  guardarProducto,
  editarProducto,
  borrarProducto,
  restaurarProductoAdmin
} from "../services/productoService"

import { cerrarSesion, obtenerUsuarioSesion } from "../services/authService"
import { cerrarSesionAPI } from "../services/api"

export const AdminProductos = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false)
  const [productos, setProductos] = useState([])

  const productosActivos = productos.filter(
    (producto) => Number(producto.activo) === 1
  )

  const productosHome = productos.filter(
    (producto) => Number(producto.mostrar_home) === 1
  )

  const [cargando, setCargando] = useState(true)
  const [productoEditando, setProductoEditando] = useState(null)
  const navigate = useNavigate()
  const usuario = obtenerUsuarioSesion()

  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    formato: "",
    imagen: "",
    mostrar_home: 0
  })

  useEffect(() => {
    cargarProductos()
  }, [])

  const manejarCambio = (e) => {
    const { name, value } = e.target

    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  const manejarEditar = (producto) => {

    setProductoEditando(producto)

    setFormulario({
      nombre: producto.nombre || "",
      descripcion: producto.descripcion || "",
      categoria: producto.categoria || "",
      formato: producto.formato || "",
      imagen: producto.imagen || "",
      mostrar_home: Number(producto.mostrar_home) || 0
    })

    setMostrarFormulario(true)
  }

  const manejarEliminar = async (producto) => {

    const confirmar = window.confirm(
      `¿Estás seguro de eliminar el producto "${producto.nombre}"?`
    )

    if (!confirmar) {
      return
    }

    try {

      await borrarProducto(producto.id)

      alert("Producto eliminado correctamente")

      await cargarProductos()

    } catch (error) {

      console.error(error)

      alert(error.message)

    }
  }

  async function manejarRestaurar(producto) {
    const confirmar = window.confirm(
      `¿Deseas restaurar el producto "${producto.nombre}"?`
    )

    if (!confirmar) {
      return
    }

    try {
      await restaurarProductoAdmin(producto.id)

      alert("Producto restaurado correctamente")

      await cargarProductos()
    } catch (error) {
      console.error(error)
      alert(error.message)
    }
  }

  async function manejarLogout() {
    try {
      await cerrarSesionAPI()
    } catch (error) {
      console.error("Error al cerrar sesión:", error)
    } finally {
      cerrarSesion()
      navigate("/login")
    }
  }

  async function cargarProductos() {

    try {

      const datos = await listarProductosAdmin()

      setProductos(datos)

    } catch (error) {

      console.error(error)

    } finally {

      setCargando(false)

    }
  }

  async function manejarGuardar(e) {
    e.preventDefault()

    try {

      if (productoEditando) {

        // EDITAR PRODUCTO
        const respuesta = await editarProducto(
          productoEditando.id,
          formulario
        )

        console.log(respuesta)

        alert("Producto actualizado correctamente")

      } else {

        // CREAR PRODUCTO
        const respuesta = await guardarProducto(formulario)

        console.log(respuesta)

        alert("Producto creado correctamente")
      }

      // Limpiar formulario
      setFormulario({
        nombre: "",
        descripcion: "",
        categoria: "",
        formato: "",
        imagen: "",
        mostrar_home: 0
      })

      // Salir del modo edición
      setProductoEditando(null)

      // Cerrar formulario
      setMostrarFormulario(false)

      // Recargar productos
      await cargarProductos()

    } catch (error) {

      console.error(error)

      alert(error.message)

    }
  }

  return (
    <section className="py-16 md:py-14 bg-gray-50 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-5">

        {/* ENCABEZADO */}

        <div>
          {/* Cabecera */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

            {/* Información */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Administración
              </span>

              <h1 className="mt-3 text-4xl font-bold text-gray-900">
                Productos
              </h1>

              {/* Usuario */}
              <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="text-sm font-medium text-gray-700">
                  👤 {usuario?.nombre}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {usuario?.email}
                </p>

                <span className="inline-flex items-center gap-1 mt-2 text-xs text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Sesión activa
                </span>
              </div>
            </div>


            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-3 lg:pt-8">

              <button
                type="button"
                onClick={() => {
                  setProductoEditando(null)

                  setFormulario({
                    nombre: "",
                    descripcion: "",
                    categoria: "",
                    formato: "",
                    imagen: "",
                    mostrar_home: 0
                  })

                  setMostrarFormulario(true)
                }}
                className="inline-flex items-center justify-center bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
              >
                + Nuevo producto
              </button>

              <button
                type="button"
                onClick={manejarLogout}
                className="inline-flex items-center justify-center bg-gray-900 text-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-700 transition"
              >
                Cerrar sesión
              </button>

            </div>

          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

            {/* Total */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Total productos
                </p>

                <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
              </div>

              <p className="text-3xl font-bold text-gray-900 mt-3">
                {productos.length}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Registrados en el sistema
              </p>
            </div>


            {/* Activos */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Productos activos
                </p>

                <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              </div>

              <p className="text-3xl font-bold text-gray-900 mt-3">
                {productosActivos.length}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Disponibles actualmente
              </p>
            </div>


            {/* Home */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-500">
                  Mostrados en Home
                </p>

                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
              </div>

              <p className="text-3xl font-bold text-gray-900 mt-3">
                {productosHome.length}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Productos destacados
              </p>
            </div>

          </div>

          {/* Descripción */}
          <div className="mt-8 mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Listado de productos
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Administra, edita, elimina y selecciona los productos que aparecerán en el sitio.
            </p>
          </div>

        </div>


        {/* FORMULARIO */}

        {mostrarFormulario && (

          <div className="mt-10 bg-white rounded-2xl shadow-sm p-8">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {productoEditando ? "Editar producto" : "Nuevo producto"}
                </h2>

                <p className="mt-2 text-gray-500">
                  {productoEditando
                    ? "Modifica la información del producto."
                    : "Ingresa la información del nuevo producto."
                  }
                </p>
              </div>

              <button
                type="button"
                onClick={() => setMostrarFormulario(false)}
                className="text-gray-500 hover:text-gray-900 text-2xl"
              >
                ×
              </button>

            </div>


            <form onSubmit={manejarGuardar} className="grid md:grid-cols-2 gap-6">

              {/* NOMBRE */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre
                </label>

                <input
                  type="text"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={manejarCambio}
                  placeholder="Ej: Arroz Flor de Ñiquén"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>


              {/* CATEGORÍA */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Categoría
                </label>

                <input
                  type="text"
                  name="categoria"
                  value={formulario.categoria}
                  onChange={manejarCambio}
                  placeholder="Ej: Arroz nacional"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>


              {/* FORMATO */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Formato
                </label>

                <input
                  type="text"
                  name="formato"
                  value={formulario.formato}
                  onChange={manejarCambio}
                  placeholder="Ej: 1 kg"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>


              {/* IMAGEN */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Imagen
                </label>

                <input
                  type="text"
                  name="imagen"
                  value={formulario.imagen}
                  onChange={manejarCambio}
                  placeholder="/productos/arroz.jpg"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>

              {/* MOSTRAR EN HOME */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="mostrar_home"
                  name="mostrar_home"
                  checked={Number(formulario.mostrar_home) === 1}
                  onChange={(e) =>
                    setFormulario({
                      ...formulario,
                      mostrar_home: e.target.checked ? 1 : 0
                    })
                  }
                  className="w-5 h-5 accent-green-700"
                />

                <label
                  htmlFor="mostrar_home"
                  className="text-sm font-medium text-gray-700"
                >
                  Mostrar este producto en la página Home
                </label>

              </div>


              {/* DESCRIPCIÓN */}

              <div className="md:col-span-2">

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Descripción
                </label>

                <textarea
                  name="descripcion"
                  value={formulario.descripcion}
                  onChange={manejarCambio}
                  rows="4"
                  placeholder="Descripción del producto..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600"
                />

              </div>


              {/* BOTONES */}

              <div className="md:col-span-2 flex justify-end gap-3 pt-4">

                <button
                  type="button"
                  onClick={() => setMostrarFormulario(false)}
                  className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-green-800 text-white font-semibold hover:bg-green-700 transition"
                >
                  Guardar producto
                </button>

              </div>

            </form>

          </div>

        )}


        {/* CONTENEDOR DE PRODUCTOS */}

        {!mostrarFormulario && (

          <div className="mt-10 bg-white rounded-2xl shadow-sm overflow-hidden">

            {cargando ? (

              <div className="p-10 text-center">
                <p className="text-gray-500">
                  Cargando productos...
                </p>
              </div>

            ) : productos.length === 0 ? (

              <div className="p-10 text-center">
                <p className="text-gray-500">
                  No hay productos registrados.
                </p>
              </div>

            ) : (

              <div className="overflow-x-auto">

                <table className="w-full">

                  <thead className="bg-gray-50 border-b border-gray-200">

                    <tr>

                      <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        ID
                      </th>

                      <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Producto
                      </th>

                      <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Categoría
                      </th>

                      <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Formato
                      </th>

                      <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Estado
                      </th>

                      <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Home
                      </th>

                      <th className="text-left px-6 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Acciones
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {productos.map((producto) => (

                      <tr
                        key={producto.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >

                        {/* ID */}
                        <td className="px-6 py-4 text-sm text-gray-400">
                          #{producto.id}
                        </td>


                        {/* Producto */}
                        <td className="px-6 py-4">

                          <p className="font-semibold text-gray-900">
                            {producto.nombre}
                          </p>

                          {producto.descripcion && (
                            <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                              {producto.descripcion}
                            </p>
                          )}

                        </td>


                        {/* Categoría */}
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {producto.categoria || "—"}
                        </td>


                        {/* Formato */}
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {producto.formato || "—"}
                        </td>


                        {/* Estado */}
                        <td className="px-6 py-4">

                          {Number(producto.activo) === 1 ? (

                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700">

                              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>

                              Activo

                            </span>

                          ) : (

                            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">

                              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>

                              Inactivo

                            </span>

                          )}

                        </td>


                        {/* Home */}
                        <td className="px-6 py-4">

                          {Number(producto.mostrar_home) === 1 ? (

                            <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
                              Sí
                            </span>

                          ) : (

                            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-500">
                              No
                            </span>

                          )}

                        </td>


                        {/* Acciones */}
                        <td className="px-6 py-4">

                          <div className="flex items-center gap-3">

                            {Number(producto.activo) === 1 ? (

                              <>

                                <button
                                  type="button"
                                  onClick={() => manejarEditar(producto)}
                                  className="text-sm font-semibold text-green-700 hover:text-green-900 transition"
                                >
                                  Editar
                                </button>

                                <button
                                  type="button"
                                  onClick={() => manejarEliminar(producto)}
                                  className="text-sm font-semibold text-red-600 hover:text-red-800 transition"
                                >
                                  Eliminar
                                </button>

                              </>

                            ) : (

                              <button
                                type="button"
                                onClick={() => manejarRestaurar(producto)}
                                className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition"
                              >
                                Restaurar
                              </button>

                            )}

                          </div>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}