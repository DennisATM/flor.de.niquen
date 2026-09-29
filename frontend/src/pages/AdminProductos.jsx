import { useState, useEffect } from "react"
import { listarProductos, guardarProducto, editarProducto } from "../services/productoService"

export const AdminProductos = () => {

    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [productoEditando, setProductoEditando] = useState(null)

  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    formato: "",
    imagen: ""
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
            imagen: producto.imagen || ""
        })

        setMostrarFormulario(true)
    }

    async function cargarProductos() {

        try {

            const datos = await listarProductos()

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
          imagen: ""
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
    <section className="py-16 md:py-24 bg-gray-50 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Administración
            </span>

            <h1 className="mt-3 text-4xl font-bold text-gray-900">
              Productos
            </h1>

            <p className="mt-3 text-gray-600">
              Administra los productos de Arrocera Flor de Ñiquén.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setMostrarFormulario(true)}
            className="inline-flex items-center justify-center bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            + Nuevo producto
          </button>

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

                    <thead className="bg-gray-100">

                        <tr>

                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                            ID
                        </th>

                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                            Producto
                        </th>

                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                            Categoría
                        </th>

                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                            Formato
                        </th>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                            Acciones
                        </th>

                        </tr>

                    </thead>

                    <tbody>

                        {productos.map((producto) => (

                            <tr
                                key={producto.id}
                                className="border-t border-gray-100 hover:bg-gray-50 transition"
                            >

                                <td className="px-6 py-4 text-gray-500">
                                #{producto.id}
                                </td>

                                <td className="px-6 py-4 font-semibold text-gray-900">
                                {producto.nombre}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                {producto.categoria}
                                </td>

                                <td className="px-6 py-4 text-gray-600">
                                {producto.formato}
                                </td>
                                <td className="px-6 py-4">

                                    <button
                                        type="button"
                                        onClick={() => manejarEditar(producto)}
                                        className="text-green-700 font-semibold hover:text-green-900 transition"
                                    >
                                        Editar
                                    </button>

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