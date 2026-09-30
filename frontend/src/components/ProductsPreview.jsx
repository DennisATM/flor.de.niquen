import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import {ProductCard} from "./ProductCard"
import { listarProductosHome } from "../services/productoService"

export const ProductsPreview = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    listarProductosHome()
      .then((datos) => {
        setProductos(datos)
      })
      .catch((error) => {
        console.error(error)
        setError("No fue posible cargar los productos.")
      })
      .finally(() => {
        setCargando(false)
      })
  }, [])

  return (
    <section className="bg-gray-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Nuestros productos
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Calidad en cada grano
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Conoce algunos de los productos que forman parte
            de nuestra propuesta.
          </p>
        </div>

        {/* Cargando */}
        {cargando && (
          <div className="py-16 text-center">
            <p className="text-gray-500">
              Cargando productos...
            </p>
          </div>
        )}

        {/* Error */}
        {!cargando && error && (
          <div className="py-16 text-center">
            <p className="text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* Productos */}
        {!cargando && !error && (
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {productos.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
              />
            ))}

          </div>
        )}

        {/* Botón */}
        {!cargando && !error && (
          <div className="mt-12 text-center">
            <Link
              to="/productos"
              className="inline-flex items-center bg-green-800 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Ver todos los productos
              <span className="ml-2">→</span>
            </Link>
          </div>
        )}

      </div>
    </section>
  )
}