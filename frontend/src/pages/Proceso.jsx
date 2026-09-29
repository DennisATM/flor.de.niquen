import { Link } from "react-router-dom"

export const Proceso = () => {
  const etapas = [
    {
      numero: "01",
      icono: "🌾",
      titulo: "Recepción",
      descripcion:
        "Recibimos el arroz y realizamos las verificaciones iniciales antes de comenzar el proceso.",
    },
    {
      numero: "02",
      icono: "🏭",
      titulo: "Secado",
      descripcion:
        "El arroz pasa por un proceso de secado controlado para alcanzar las condiciones adecuadas.",
    },
    {
      numero: "03",
      icono: "⚙️",
      titulo: "Elaboración",
      descripcion:
        "El arroz es sometido a las distintas etapas necesarias para obtener el producto terminado.",
    },
    {
      numero: "04",
      icono: "🔎",
      titulo: "Control de calidad",
      descripcion:
        "Realizamos controles durante el proceso para verificar las condiciones del producto.",
    },
    {
      numero: "05",
      icono: "📦",
      titulo: "Envasado",
      descripcion:
        "Finalmente, el producto es preparado y envasado para llegar a nuestros clientes.",
    },
  ]

  return (
    <div className="bg-white">

      {/* Encabezado */}
      <section className="bg-green-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-green-200">
            Del campo a tu mesa
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Nuestro proceso
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-green-100 leading-relaxed">
            Cada etapa es parte de un proceso que busca entregar
            un producto de calidad.
          </p>

        </div>
      </section>

      {/* Introducción */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Calidad en cada etapa
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Un proceso que comienza en nuestra tierra
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Desde la recepción de la materia prima hasta el envasado,
            cada etapa cumple un papel importante en la elaboración
            de nuestros productos.
          </p>

        </div>
      </section>

      {/* Etapas */}
      <section className="pb-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {etapas.map((etapa, index) => (
              <article
                key={etapa.numero}
                className={`relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition duration-300 ${
                  index === etapas.length - 1
                    ? "lg:col-start-2"
                    : ""
                }`}
              >

                {/* Número */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-green-100">
                  {etapa.numero}
                </span>

                {/* Icono */}
                <div className="relative w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                  {etapa.icono}
                </div>

                {/* Contenido */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {etapa.titulo}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {etapa.descripcion}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-green-50 py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Conoce nuestros productos
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Calidad y dedicación en cada grano
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Descubre nuestra selección de productos y conoce
            las alternativas que tenemos disponibles.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/productos"
              className="bg-green-700 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Ver productos
            </Link>

            <Link
              to="/contacto"
              className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-700 hover:text-white transition"
            >
              Contáctanos
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}