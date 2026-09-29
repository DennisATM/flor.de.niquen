import { Link } from "react-router-dom"

export const Servicios = () => {
  const servicios = [
    {
      icono: "🌾",
      numero: "01",
      titulo: "Secado y almacenaje de Arroz Paddy",
      descripcion:
        "Ofrecemos servicios de recepción, secado y almacenamiento de arroz Paddy, entregando una alternativa para el manejo del producto durante las distintas etapas de la temporada.",
      caracteristicas: [
        "Recepción de arroz Paddy",
        "Servicio de secado",
        "Almacenamiento",
        "Manejo y conservación del producto",
      ],
    },
    {
      icono: "🌽",
      numero: "02",
      titulo: "Secado y almacenaje de Maíz",
      descripcion:
        "Contamos con servicios orientados al manejo de maíz, incluyendo procesos de secado y almacenamiento para facilitar la conservación y posterior despacho del producto.",
      caracteristicas: [
        "Recepción de maíz",
        "Servicio de secado",
        "Almacenamiento",
        "Despacho según requerimientos",
      ],
    },
    {
      icono: "🚛",
      numero: "03",
      titulo: "Transporte de carga",
      descripcion:
        "Disponemos de camiones para realizar transporte de carga tanto a granel como de productos envasados, adaptándonos a las necesidades de cada traslado.",
      caracteristicas: [
        "Transporte de carga a granel",
        "Transporte de carga envasada",
        "Camiones para distintos requerimientos",
        "Traslado y despacho de productos",
      ],
    },
  ]

  return (
    <div className="bg-white">

      {/* Encabezado */}
      <section className="bg-green-800 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-green-200">
            Soluciones para nuestros clientes
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Nuestros servicios
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-green-100 leading-relaxed">
            Servicios de secado, almacenamiento y transporte
            para productos agrícolas.
          </p>

        </div>
      </section>

      {/* Introducción */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
            Más que productos
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Soluciones para el manejo de tu producción
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Ponemos a disposición de nuestros clientes servicios
            relacionados con el secado, almacenamiento y transporte
            de productos agrícolas.
          </p>

        </div>
      </section>

      {/* Servicios */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-8">

            {servicios.map((servicio) => (
              <article
                key={servicio.numero}
                className="group relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-white hover:shadow-xl transition duration-300"
              >

                {/* Número */}
                <span className="absolute top-6 right-7 text-5xl font-bold text-green-100">
                  {servicio.numero}
                </span>

                {/* Icono */}
                <div className="relative w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center text-4xl">
                  {servicio.icono}
                </div>

                {/* Título */}
                <h3 className="mt-7 text-2xl font-bold text-gray-900">
                  {servicio.titulo}
                </h3>

                {/* Descripción */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {servicio.descripcion}
                </p>

                {/* Características */}
                <ul className="mt-6 space-y-3">
                  {servicio.caracteristicas.map((caracteristica) => (
                    <li
                      key={caracteristica}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <span className="mt-1 text-green-700 font-bold">
                        ✓
                      </span>

                      <span>{caracteristica}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón */}
                <Link
                  to="/contacto"
                  className="inline-block mt-8 text-green-700 font-semibold hover:text-green-900 transition"
                >
                  Solicitar información →
                </Link>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Transporte */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <span className="text-sm font-semibold uppercase tracking-wider text-green-700">
                Transporte de carga
              </span>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
                Carga a granel y carga envasada
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Contamos con camiones destinados al transporte de
                productos agrícolas, permitiendo atender necesidades
                de traslado tanto de carga a granel como de productos
                envasados.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">

                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="text-3xl">🚛</div>

                  <h3 className="mt-3 font-bold text-gray-900">
                    Carga a granel
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Transporte de productos agrícolas a granel.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="text-3xl">📦</div>

                  <h3 className="mt-3 font-bold text-gray-900">
                    Carga envasada
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    Transporte de productos envasados y ensacados.
                  </p>
                </div>

              </div>

            </div>

            {/* Espacio preparado para futura fotografía */}
            <div className="bg-green-100 rounded-3xl min-h-87.5 flex items-center justify-center">

              <div className="text-center px-8">

                <div className="text-8xl">
                  🚛
                </div>

                <p className="mt-6 text-green-800 font-semibold text-lg">
                  Nuestra flota de transporte
                </p>

                <p className="mt-2 text-green-700">
                  Aquí incorporaremos posteriormente
                  fotografías reales de nuestros camiones.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-green-200">
            ¿Necesitas alguno de nuestros servicios?
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Conversemos sobre tu requerimiento
          </h2>

          <p className="mt-5 text-green-100 text-lg leading-relaxed">
            Ponte en contacto con nosotros para conocer
            disponibilidad y condiciones del servicio.
          </p>

          <Link
            to="/contacto"
            className="inline-block mt-8 bg-white text-green-800 px-8 py-3.5 rounded-full font-semibold hover:bg-green-50 transition"
          >
            Solicitar información
          </Link>

        </div>
      </section>

    </div>
  )
}