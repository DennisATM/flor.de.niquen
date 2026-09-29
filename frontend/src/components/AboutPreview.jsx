import { Link } from "react-router-dom"

export const AboutPreview = () => {
  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* CONTENIDO */}

          <div>

            <span className="inline-block mb-4 text-sm font-semibold tracking-wider uppercase text-green-700">
              Quiénes somos
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Tradición y calidad
              <span className="block text-green-700">
                en cada grano.
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              En Arrocera Flor de Ñiquén trabajamos para entregar
              un arroz de calidad, cuidando cada etapa del proceso
              y manteniendo el compromiso con nuestros clientes.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Nuestra experiencia y dedicación nos permiten llevar
              a la mesa un producto elaborado con atención y
              respeto por nuestra tradición arrocera.
            </p>

            <Link
              to="/nosotros"
              className="inline-block mt-8 border-b-2 border-green-700 pb-1 text-green-700 font-semibold hover:text-green-900 transition"
            >
              Conoce nuestra historia →
            </Link>

          </div>


          {/* BLOQUE VISUAL */}

          <div className="relative">

            <div className="rounded-3xl bg-green-50 p-10 md:p-14">

              <div className="grid grid-cols-2 gap-8">

                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="text-4xl mb-3">
                    🌾
                  </div>

                  <h3 className="font-bold text-gray-900">
                    Arroz nacional
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Producto elaborado en Chile.
                  </p>
                </div>


                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="text-4xl mb-3">
                    ⭐
                  </div>

                  <h3 className="font-bold text-gray-900">
                    Calidad
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Cuidamos cada etapa del proceso.
                  </p>
                </div>


                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="text-4xl mb-3">
                    🏭
                  </div>

                  <h3 className="font-bold text-gray-900">
                    Experiencia
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Conocimiento de nuestra industria.
                  </p>
                </div>


                <div className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="text-4xl mb-3">
                    🤝
                  </div>

                  <h3 className="font-bold text-gray-900">
                    Compromiso
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Trabajamos junto a nuestros clientes.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}