import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { buscarProductoPorId } from "../services/ProductoService"

export const ProductoDetalle = () => {
  const { id } = useParams()

  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    buscarProductoPorId(id)
      .then((datos) => {
        setProducto(datos)
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      })
      .finally(() => {
        setCargando(false)
      })
  }, [id])

  if (cargando) {
    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500">
            Cargando producto...
          </p>
        </div>
      </section>
    )
  }

  if (error || !producto) {
    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-3xl font-bold text-gray-900">
            Producto no encontrado
          </h1>

          <p className="mt-4 text-gray-600">
            {error || "El producto solicitado no existe."}
          </p>

          <Link
            to="/productos"
            className="inline-block mt-8 bg-green-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Volver a productos
          </Link>

        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Imagen */}
          <div className="bg-gray-100 rounded-3xl overflow-hidden">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-112.5 object-contain"
            />
          </div>

          {/* Información */}
          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              {producto.categoria}
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
              {producto.nombre}
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              {producto.descripcion}
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">

              <div className="bg-green-50 rounded-2xl p-5">
                <span className="text-sm text-gray-500">
                  Categoría
                </span>

                <p className="mt-1 text-lg font-bold text-green-800">
                  {producto.categoria}
                </p>
              </div>

              <div className="bg-green-50 rounded-2xl p-5">
                <span className="text-sm text-gray-500">
                  Formato
                </span>

                <p className="mt-1 text-lg font-bold text-green-800">
                  {producto.formato}
                </p>
              </div>

            </div>

            <Link
              to="/productos"
              className="inline-flex mt-8 border-2 border-green-800 text-green-800 px-7 py-3 rounded-full font-semibold hover:bg-green-800 hover:text-white transition"
            >
              ← Volver a productos
            </Link>

          </div>

        </div>

      </div>
    </section>
  )
}