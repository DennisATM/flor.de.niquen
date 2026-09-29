import { useEffect, useState } from "react"

import {ProductCard} from "../components/ProductCard"
import { listarProductos } from "../services/ProductoService"

export const Productos = () => {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    listarProductos()
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
    <div className="bg-white">

      {/* Encabezado */}
      <section className="bg-green-950 py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-200">
            Nuestra selección
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Nuestros productos
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-green-100 leading-relaxed">
            Conoce nuestra selección de productos y descubre
            la calidad que forma parte de Arrocera Flor de Ñiquén.
          </p>

        </div>
      </section>

      {/* Productos */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">

          {cargando && (
            <div className="py-16 text-center">
              <p className="text-gray-500">
                Cargando productos...
              </p>
            </div>
          )}

          {!cargando && error && (
            <div className="py-16 text-center">
              <p className="text-red-600">
                {error}
              </p>
            </div>
          )}

          {!cargando && !error && productos.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-gray-500">
                  No hay productos disponibles.
              </p>
            </div>
          )}

          {!cargando && !error && productos.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {productos.map((producto) => (
                <ProductCard
                  key={producto.id}
                  producto={producto}
                />
              ))}

            </div>
          )}

        </div>
      </section>

    </div>
  )
}